import Link from 'next/link'


const Layout = (props, init) => {
  const { children } = props
  return (
    <>
      <header>
        
      </header>
      <main className='mx-auto flex w-full max-w-2xl flex-col justify-center px-8 py-36'>
        {children}
      </main>
      <footer className='mx-auto w-full max-w-2xl px-8 pb-36'>
        
      </footer>
    </>
  )
}

export default Layout