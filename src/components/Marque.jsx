import { motion } from "framer-motion"

const Marque = () => {

    return (
        <div className="bg-[#004D43] py-20 rounded-2xl">
            <div className="w-full flex overflow-hidden whitespace-nowrap pb-10 text-white border border-t-white">
                <motion.h1
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
                    className="text-[24rem] uppercase pl-12 leading-[0.75] align-text-top"
                >
                    We are OCHI
                </motion.h1>

                <motion.h1
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
                    className="text-[24rem] uppercase pl-12 leading-[0.75] align-text-top"
                >
                    We are OCHI
                </motion.h1>

                <motion.h1
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
                    className="text-[24rem] uppercase pl-12 leading-[0.75] align-text-top"
                >
                    We are OCHI
                </motion.h1>

            </div>
        </div>
    )
}

export default Marque