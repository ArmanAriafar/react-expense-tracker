//? required
import { motion } from "framer-motion";
import { useState } from "react";

export default function TotalCard({ expense, income }) {
    const [isActive, setIsActive] = useState(false);
    //? Framer
    const TotalVars = {
        open: {
            zIndex: 21,
            top: ["-2.5rem", "-9rem", "-2.5rem"],
        },
        closed: {
            zIndex: 19,
            top: ["-2.5rem", "-9rem", "-2.5rem"],
        },
    };
    return (
        <div className="relative w-full max-w-sm">
            <motion.div
                variants={TotalVars}
                animate={isActive ? "open" : "closed"}
                transition={{
                    type: "tween",
                    duration: 1,
                    zIndex: {
                        delay: 0.5,
                    },
                }}
                className="BgBlue absolute right-1/2 grid h-36 w-72 !translate-x-1/2 cursor-pointer grid-rows-[30px_1fr] rounded-lg px-3 py-2"
                onClick={() => setIsActive((prev) => !prev)}
            >
                <p className="self-center justify-self-start font-black text-white">
                    جمع کل
                </p>
                <p
                    className="self-center justify-self-end font-serif text-4xl text-white"
                    dir="ltr"
                >
                    {(income - expense).toLocaleString()}
                    <span className="text-xs opacity-60">تومان</span>{" "}
                </p>
            </motion.div>
        </div>
    );
}
