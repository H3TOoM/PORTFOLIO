import { CONTACT } from "../constants"
import { motion } from "motion/react"
const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2 className="my-10 text-center text-4xl uppercase"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Get In Touch
      </motion.h2>
      <motion.div className="tracking-tighter text-center"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2 }}
      >
        <p className="my-4">
          {CONTACT.address}
        </p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" >{CONTACT.email}</a>
      </motion.div>
    </div>
  )
}

export default Contact