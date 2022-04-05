import Link from 'next/link'
import {
  Home,
  User,
  Briefcase,
  Edit2,
  Aperture,
  Activity,
  Tool
} from 'react-feather'

const NavBar = () => {
  return (
    <footer className='fixed inset-x-0 bottom-8 z-[9999999999] w-full text-center transition-all'>
      <nav className='mx-auto max-w-fit'>
        <div className='mx-8 flex items-center space-x-2 overflow-x-auto rounded-[24px] border-2 border-white-300 bg-white-50 px-[12px] py-[12px] transition-all'>
          <Link href='/'>
            <a
              aria-label='Home'
              className='rounded-xl bg-white-200 transition duration-300 hover:bg-white-10'
            >
              <Home className='p-3 text-white-800' size={40} />
            </a>
          </Link>

          <Link href='/now'>
            <a
              aria-label='Now'
              className='rounded-xl bg-white-200 transition duration-300 hover:bg-white-10'
            >
              <Activity className='p-3 text-white-800' size={40} />
            </a>
          </Link>
          <Link href='/about'>
            <a
              aria-label='About'
              className='rounded-xl bg-white-200 transition duration-300 hover:bg-white-10'
            >
              <User className='p-3 text-white-800' size={40} />
            </a>
          </Link>
          <Link href='/projects'>
            <a
              aria-label='Projects'
              className='rounded-xl bg-white-200 transition duration-300 hover:bg-white-10'
            >
              <Briefcase className='p-3 text-white-800' size={40} />
            </a>
          </Link>
          <Link href='/blog'>
            <a
              aria-label='Blog'
              className='rounded-xl bg-white-200 transition duration-300 hover:bg-white-10'
            >
              <Edit2 className='p-3 text-white-800' size={40} />
            </a>
          </Link>
          <Link href='/play'>
            <a
              aria-label='Play'
              className='rounded-xl bg-white-200 transition duration-300 hover:bg-white-10'
            >
              <Aperture className='p-3 text-white-800' size={40} />
            </a>
          </Link>

          <Link href='/colophon'>
            <a
              aria-label='Colophon'
              className='rounded-xl bg-white-200 transition duration-300 hover:bg-white-10'
            >
              <Tool className='p-3 text-white-800' size={40} />
            </a>
          </Link>
        </div>
      </nav>
    </footer>
  )
}

export default NavBar
