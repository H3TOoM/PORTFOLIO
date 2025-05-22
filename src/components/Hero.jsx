import profilePic from '../assets/mypic.jpg'
import { HERO_CONTENT } from '../constants'
import { motion } from 'motion/react'
const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const chidVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        }
    }
}

const Hero = () => {
    return (
        <div className='pb-4 lg:mb-36'>
            <div className='flex lg:flex-wrap flex-wrap-reverse'>
                <div className='w-full lg:w-1/2'>
                    <motion.div className='flex flex-col items-center lg:items-start mt-10'
                        initial="hidden" animate="visible"
                        variants={containerVariants}
                    >
                        <motion.h2 className='pd-2 text-4xl tracking-tighter lg:text-6xl uppercase'
                            variants={chidVariants}
                        >
                            Hatim Rajab
                        </motion.h2>
                        <motion.span
                            variants={chidVariants}
                            className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl tracking-tight text-transparent uppercase max-md:text-center'>
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={chidVariants}
                            className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a
                            variants={chidVariants}
                            href="/resume.pdf"
                            target='_blank'
                            rel='noopener noreferrer'
                            download
                            className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10 hover:scale-105 transition-all duration-300'>Download Resume</motion.a>
                    </motion.div>
                </div>


                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:p-2'>
                        <motion.img src={profilePic}
                            alt="Hatim"
                            className='border border-stone-700 rounded-full w-100'
                            width={650} height={650}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero