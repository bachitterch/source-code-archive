import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '@components/Navbar'

const Layout = (props, init) => {
  const { children } = props
  return (
    <>
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.4,
              ease: [0.11, 0, 0.5, 0]
            }
          }}
          className='mx-auto flex w-full max-w-2xl flex-col justify-center px-8 py-36'
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Navbar />
    </>
  )
}

export default Layout
