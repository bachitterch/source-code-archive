import NextAuth from 'next-auth/next'
import TwitchProvider from 'next-auth/providers/twitch'

async function refreshToken(token) {
  const url =
    'https://id.twitch.tv/oauth2/token?' +
    new URLSearchParams({
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      grant_type: 'refresh_token',
      refresh_token: token.refreshToken
    })

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  const refreshTokens = await response.json()

  return {
    ...token,
    accessToken: refreshTokens.access_token,
    refreshToken: refreshTokens.refresh_token
  }
}

export default NextAuth({
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET,
      authorization: {
        params: {
          scope:
            'openid chat:read chat:edit channel:moderate whispers:read whispers:edit user_block_edit clips:edit user:edit:follows user:edit:broadcast channel:edit:commercial user_subscriptions user:read:follows moderator:manage:automod'
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      return token
    }
  },
  secret: process.env.JWT_SECRET
})
