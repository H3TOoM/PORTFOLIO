
import { FaGitAlt } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb, SiTailwindcss } from "react-icons/si"
import { motion } from "motion/react"


const iconsVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10]
    },
    trantsion: {
        duration: duration,
        ease: "Linear",
        repeat: Infinity,
        repeatType: "reverse"
    }

})

const Technologies = () => {
    return (
        <div className="pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl uppercase">Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconsVariants(2.5)}
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div className="p-4"
                    initial="initial"
                    animate="animate"
                    variants={iconsVariants(3)}
                >
                    <SiMongodb className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div className="p-4"
                    initial="initial"
                    animate="animate"
                    variants={iconsVariants(5)}
                >
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>

                <motion.div className="p-4"
                    initial="initial"
                    animate="animate"
                    variants={iconsVariants(2)}
                >
                    <SiTailwindcss className="text-7xl text-cyan-600" />
                </motion.div>

                <motion.div className="p-4"
                    initial="initial"
                    animate="animate"
                    variants={iconsVariants(6)}
                >
                    <FaGitAlt className="text-7xl text-orange-600" />
                </motion.div>

                <motion.div className="p-4"
                    initial="initial"
                    animate="animate"
                    variants={iconsVariants(4)}
                >
                    <IoLogoJavascript className="text-7xl text-yellow-400" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies