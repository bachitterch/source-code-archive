import NextAuth from 'next-auth/next'
import Twitch from 'next-auth/providers/twitch'

async function refreshAccessToken(token) {
  try {
    const url =
      'https://id.twitch.tv/oauth2/authorize' +
      new URLSearchParams({
        client_id: process.env.TWITCH_CLIENT_ID,
        client_secret: process.env.TWITCH_CLIENT_SECRET,
        grant_type: 'refresh_token',
        refresh_token: token.refreshToken
      })
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST'
    })

    const refreshedTokens = await response.json()

    if (!response.ok) {
      throw refreshedTokens
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken
    }
  } catch (error) {
    console.error(error)
  }

  return {
    ...token,
    error: 'RefreshAccessTokenError'
  }
}

export default NextAuth({
  providers: [
    Twitch({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET
    })
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: account.expires_at,
          refreshToken: account.refresh_token,
          user
        }
      }

      if (Date.now() < token.accessTokenExpires) {
        return token
      }

      return refreshAccessToken(token)
    },
    async session({ session, token }) {
      session.user = token.user
      session.accessToken = token.accessToken
      session.error = token.error

      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET
  }
})
