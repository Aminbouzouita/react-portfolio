import React from 'react';
import { motion } from "framer-motion";
export default function SlideBottom(props) {
    const pageVariants = {
        in: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            y: "100%",
            scale: 0.8
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
            variants={pageVariants}
            transition={pageTransition}
            className={props.className}
            >

            {props.children}

        </motion.div>
    )
}