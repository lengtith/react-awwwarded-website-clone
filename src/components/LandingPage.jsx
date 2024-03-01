import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

const LandingPage = () => {
    return (
        <div className="w-full h-[calc(100vh - 62px)] divide-y divide-zinc-400">
            <div className="px-14 overflow-hidden">
                <div className="py-16">
                    <div className="flex flex-col gap-0 font-FoundersGrotesk">
                        <div className="text-10xl leading-none uppercase">
                            We create
                        </div>
                        <div className="flex items-center gap-2 leading-none">
                            <motion.div initial={{ width: "0px" }} animate={{ width: "160px" }} transition={{ ease: 'easeOut', duration: 1 }}>
                                <img className="w-40 -mb-3 object-cover rounded-md" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                            </motion.div>
                            <span className="text-10xl uppercase">EYE-OPENING</span>
                        </div>
                        <div className="text-10xl leading-none uppercase">
                            PRESENTATIONS
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between px-14 py-4">
                <div>For public and private companies</div>
                <div>From the first pitch to IPO</div>
                <div className="flex gap-2 items-center">
                    <span>Start the project</span>
                    <MdOutlineArrowOutward />
                </div>
            </div>
        </div>
    )
}

export default LandingPage