import type { GetServerSideProps, NextPage } from 'next'
import { signIn, signOut, useSession, getSession } from 'next-auth/react'

const Home: NextPage = ({ msg }: any) => {
  const { data: session } = useSession()

  console.log(msg)
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
          <p>{session?.user?.name}</p>
          <p>{session?.user?.email}</p>
          <img src={session?.user?.image} alt='twich' />
        </div>
      )}
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const session = await getSession()

  const username = session?.user?.name
  const token = session?.accessToken as string

  return {
    props: {}
  }
}
