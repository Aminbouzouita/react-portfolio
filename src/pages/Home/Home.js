import React from 'react';
import { motion } from "framer-motion"
import "./style.css";

export default function Home() {
 
    // const pageVariants = {
    //     in: {
    //       opacity: 1,
    //       y: 0
    //     },
    //     out: {
    //       opacity: 0,
    //       y: "-100%"
    //     }
    //   }
      const pageVariantsleft = {
        in: {
          opacity: 1,
          x: 0
        },
        out: {
          opacity: 0,
          x: "-100%"
        }
      }
      const pageVariantsright = {
        in: {
          opacity: 1,
          x: 0
        },
        out: {
          opacity: 0,
          x: "100%"
        }
      }
      const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: "1"
      }
    
    
  return (
    <main className="posts">
            <section className="post">
        <div className="row skills post-description">
          <motion.div 
            initial="out"
            animate="in"
            exit="out"
            variants={pageVariantsright}
            transition={pageTransition}
            className="fadeOut" 
           >
             <div className="project col-6" >
            </div>
          </motion.div>
          <motion.div
            initial="out"
            animate="in" 
            exit="out"
            variants={pageVariantsleft}
            transition={pageTransition}
            className="fadeIn"
            ref={ref}
           >
              <div className="col-6 name">
              <h1>Amin</h1>
              <h1>Bouzouita</h1>
               <p>__</p>
               <p>____</p>
               <h1>Full Stuck</h1>
                <h1>Web Developper</h1>
              </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}




