import React from 'react';
import { motion } from "framer-motion"
import "./style.css";
import { useRef, useLayoutEffect, useState, useEffect } from 'react'



export default function Home() {
 
  const ref = useRef();
  // const onScreen = useOnScreen(ref, '-100px');
  // function useOnScreen(ref, rootMargin = '100px') {
  //   // State and setter for storing whether element is visible
  //   const [isIntersecting, setIntersecting] = useState(false);
  
  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         // Update our state when observer callback fires
  //         setIntersecting(entry.isIntersecting);
  //       },
  //       {
  //         rootMargin
  //       }
  //     );
  //     if (ref.current) {
  //       observer.observe(ref.current);
  //     }
  //     return () => {
  //       observer.unobserve(ref.current);
  //     };
  //   }, []); // Empty array ensures that effect is only run on mount and unmount
  
  //   return isIntersecting;

  // }
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
               <h1>Full Stack</h1>
                <h1>Web Developper</h1>
              </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}




