import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Projects = () => {

    const [open, setOpen] = React.useState(true);
    const [open1, setOpen1] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClick1 = () => {
        setOpen1(!open1);
    }

    const handleClick2 = () => {
        setOpen2(!open2);
    }

  return (
    <div className='container px-20 py-20 mx-auto'>
        <div className='text-white'>
           <p className='text-4xl flex justify-center'>My projects</p>
        </div>
        <div className='grid grid-cols-3 gap-3'>
              <div data-aos="fade-right" className='text-white text-left'>
                  <p className='flex flex-col' onClick={handleClick}>
                      <ListItemText />
                      {open ?
                          <p className='mt-5'>About me<ExpandMore fontSize="large" className='cursor-pointer' /></p>
                          : <ExpandLess fontSize="large" className='cursor-pointer' />}
                  </p>
                  <Collapse in={!open} timeout="auto" unmountOnExit>
                      <motion.p
                          initial={{ y: "50%", opacity: 0, scale: 0.5 }}
                          animate={{ y: 0, opacity: 1, scale: 1 }}
                          exit={{ y: "50%", opacity: 0, transition: { duration: 0.1 } }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className='text-xl mt-5'>I am a Frontend Engineer who has graduated from Alterra Academy Bootcamp.
                          I learned technology especially website development since 2019 .
                          I am interested in front-end development because I like to learn ReactJS, HTML , CSS and Javascript .
                          I’m seeking employment as a Frontend Engineer with a company where
                          I can implement my ability and grow up either my skills or personality.</motion.p>
                  </Collapse>
              </div>
              <div data-aos="fade-right" className='text-white text-left'>
                  <p className='flex flex-col' onClick={handleClick1}>
                      <ListItemText />
                      {open1 ?
                          <p className='mt-5'>About me<ExpandMore fontSize="large" className='cursor-pointer' /></p>
                          : <ExpandLess fontSize="large" className='cursor-pointer' />}
                  </p>
                  <Collapse in={!open1} timeout="auto" unmountOnExit>
                      <motion.p
                          initial={{ y: "50%", opacity: 0, scale: 0.5 }}
                          animate={{ y: 0, opacity: 1, scale: 1 }}
                          exit={{ y: "50%", opacity: 0, transition: { duration: 0.1 } }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className='text-xl mt-5'>I am a Frontend Engineer who has graduated from Alterra Academy Bootcamp.
                          I learned technology especially website development since 2019 .
                          I am interested in front-end development because I like to learn ReactJS, HTML , CSS and Javascript .
                          I’m seeking employment as a Frontend Engineer with a company where
                          I can implement my ability and grow up either my skills or personality.</motion.p>
                  </Collapse>
              </div>
              <div data-aos="fade-right" className='text-white text-left'>
                  <p className='flex flex-col' onClick={handleClick2}>
                      <ListItemText />
                      {open2 ?
                          <p className='mt-5'>About me<ExpandMore fontSize="large" className='cursor-pointer' /></p>
                          : <ExpandLess fontSize="large" className='cursor-pointer' />}
                  </p>
                  <Collapse in={!open2} timeout="auto" unmountOnExit>
                      <motion.p
                          initial={{ y: "50%", opacity: 0, scale: 0.5 }}
                          animate={{ y: 0, opacity: 1, scale: 1 }}
                          exit={{ y: "50%", opacity: 0, transition: { duration: 0.1 } }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className='text-xl mt-5'>I am a Frontend Engineer who has graduated from Alterra Academy Bootcamp.
                          I learned technology especially website development since 2019 .
                          I am interested in front-end development because I like to learn ReactJS, HTML , CSS and Javascript .
                          I’m seeking employment as a Frontend Engineer with a company where
                          I can implement my ability and grow up either my skills or personality.</motion.p>
                  </Collapse>
              </div>
        </div>
    </div>
  )
}

export default Projects
