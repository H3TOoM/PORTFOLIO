import { EXPERIENCES } from "../constants"
import { motion } from "motion/react"

const Experience = () => {
    return (
        <div className="pd-8 mb-15">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 2 }}
                className="my-20 text-center text-4xl">MY JOURNY</motion.h2>
            <div>
                {
                    EXPERIENCES.map((ex, index) => (
                        <motion.div key={index}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 2 }}

                            className="mb-8 flex items-center flex-wrap lg:justify-center">
                            <div className="w-full lg:w-1/4">
                                <p className="mb-3 text-sm text-stone-400">{ex.year}</p>
                            </div>

                            <div className="w-full max-w-xl lg:w-3/4">
                                <h3 className="md-2 font-semibold">{ex.role} -{" "}
                                    <span className="text-sm text-stone-500">{ex.company}</span>
                                </h3>
                                <p className="mb-4 text-stone-400">{ex.description}</p>
                                {ex.technologies.map((tech, index) => (
                                    <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300" key={index}>{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Experience