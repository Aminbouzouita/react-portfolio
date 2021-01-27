import React from 'react';
import { motion } from "framer-motion";

export default function SlideRight(props) {

    const pageVariantsright = {
        in: {
            opacity: 1,
            x: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            x: "100%",
            scale: 0.6
        }
    }
    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: "2"
    }

    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={pageVariantsright}
            transition={pageTransition}
            className={props.className}
        >

            {props.children}

        </motion.div>

    )
}