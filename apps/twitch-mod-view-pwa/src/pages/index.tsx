import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const { data: session } = useSession()

  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      signIn()
    }
  }, [session])

  return (
    <div>
      <h1>Hello Next.js</h1>
      {session ? (
        <button onClick={() => signOut()}>Signout</button>
      ) : (
        <button onClick={() => signIn()}>SignIn</button>
      )}
      {session && (
        <div>
          <small>Signed in as</small>
          <br />
          <p>{session.user.name}</p>
          <p>{session.user.email}</p>
          <img src={session.user.image} alt='twich' />
        </div>
      )}
    </div>
  )
}

export default Home
