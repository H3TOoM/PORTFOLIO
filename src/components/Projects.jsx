import { FaGithub } from "react-icons/fa"
import { PROJECTS } from "../constants"
import { MdLiveTv } from "react-icons/md"
import { motion } from "motion/react"
const Projects = () => {
    return (
        <div className="pb-8">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-10 text-center text-4xl">PROJECTS</motion.h2>
            {/* <div>
                {
                    PROJECTS.map((project, index) => (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <div className="w-full lg:w-1/4">
                                <img src={project.image} alt="" width={250} height={250}
                                    className="mb-6 rounded"
                                />
                            </div>
                            <div className="w-full max-w-xl lg:w-3/4">
                                <div className="flex gap-5">
                                    <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                                </div>

                                <p className="mb-4 text-stone-400">{project.description}</p>
                                {project.technologies.map((tech, index) => (
                                    <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>{tech}</span>
                                ))}
                            </div>

                        </div>
                    ))
                }
            </div> */}

            <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 3 }}
                className="text-stone-400 text-center">The projects section is currently closed due to my work on completing some projects that will be posted here.
            </motion.p>
        </div>
    )
}

export default Projects