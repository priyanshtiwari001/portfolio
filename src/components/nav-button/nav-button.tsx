'use client';
import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import styles from './style.module.scss';
import Link from 'next/link';

const menu = {

  open: {

      width: "300px",

      height: "350px",

      top: "-25px",

      right: "-25px",

      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}

  },

  closed: {

      width: "100px",

      height: "40px",

      top: "0px",

      right: "0px",

      transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}

  }

}
const links = [

  {

      title: "home",

      href: "/"

  },

  {

      title: "about",

      href: "/about"

  },
 

  {

      title: "projects",

      href: "/myprojects"

  },
  {

    title: "stack",

    href: "/"

},
  {

    title: "contact",

    href: "/mycontact"

},



]

const perspective = {

  initial: {

      opacity: 0,

      rotateX: 90,

      translateY: 80,

      translateX: -20,

  },

  enter: (i:number) => ({

      rotateX: 0,

      translateY: 0,

      translateX: 0,
   
      opacity: 1,
      transition: {

          duration: 0.6, 

          delay: 0.5 + (i * 0.1), 

          ease: [.215,.61,.355,1],

          opacity: { duration: 0.75}

      }
   

  }),

  exit: {

      opacity: 0,

      transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1]}

  }

}
const NavButton= ()=>{
  const [isActive, setIsActive] = useState(false);
  return(
    <div className={styles.header}>
      <motion.div 

className={styles.menu}

variants={menu}

animate={isActive ? "open" : "closed"}

initial="closed"

>
<AnimatePresence>
                    {isActive && <NavLinks />}
                </AnimatePresence>
</motion.div>
    <div className={styles.button}>

<motion.div 

    className={styles.slider}

    animate={{top: isActive ? "-100%" : "0%"}}

    transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}

>

    <div 

        className={styles.el}

        onClick={() => setIsActive(!isActive)}

    >

        <PerspectiveText label="menu"/>

    </div>

    <div 

        className={styles.el}

        onClick={() =>  setIsActive(!isActive)}

    >

        <PerspectiveText label="close" />

    </div>

</motion.div>

</div>
    </div>
  );
}

export default NavButton;

function PerspectiveText({label}:{label:string}) {

  return (    

      <div className={styles.perspectiveText}>

          <p>{label}</p>

          <p>{label}</p>

      </div>

  )

}


 function NavLinks() {

  return (

    <div className={styles.nav}>

       <div className={styles.body}>

        {

            links.map( (link, i) => {

                const { title, href } = link;

                return (

                    <div key={`b_${i}`} className={styles.linkContainer}>

                        <motion.div

                          

                          custom={i}

                          variants={perspective}

                          initial="initial"

                          animate="enter"

                          exit="exit"

                        >

                            <Link href={href}>

                                {title}

                            </Link>

                        </motion.div>

                    </div>

                )

            })

        }

       </div>

    </div>

  )

}