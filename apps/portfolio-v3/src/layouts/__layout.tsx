import NavBar from '@components/NavBar'

const Layout = (props, init) => {
  const { children } = props
  return (
    <>
      <NavBar />
      <main className='mx-auto flex w-full max-w-2xl flex-col justify-center px-8 py-36'>
        {children}
      </main>
    </>
  )
}

export default Layout
