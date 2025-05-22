import React from 'react'
import { DiGithub } from 'react-icons/di'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiGithub } from 'react-icons/si'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6 '>
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" aria-label='Home' className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-wide text-transparent uppercase font-medium'>MUJAHID</a>
      </div>

      <div className='m-5 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/h3tim?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <FaLinkedin className='hover:text-stone-400' />
        </a>

        <a href="https://github.com/H3TOoM" target='_blank' rel='noopener noreferrer'
          aria-label='GitHub'
        >
          <SiGithub className='hover:text-stone-400' />
        </a>

        <a href="https://www.facebook.com/MOUJAHEDo" target='_blank' rel='noopener noreferrer'
          aria-label='Facbook'
        >
          <FaFacebook className='hover:text-stone-400' />
        </a>

        <a href="https://x.com/HatimDev?t=zKm2XLr8FdTnXJ4soBCBNQ&s=09" target='_blank' rel='noopener noreferrer'
          aria-label='Twitter'
        >
          <FaXTwitter className='hover:text-stone-400' />
        </a>
      </div>
    </nav>
  )
}

export default Navbar