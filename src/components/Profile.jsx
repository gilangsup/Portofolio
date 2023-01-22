import React from 'react'
import PhotoProfile from '../assets/pp.png'
import TextSpan from './TextSpan';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import StarBorder from '@mui/icons-material/StarBorder';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion, useAnimationControls } from 'framer-motion'


const Profile = () => {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const sentence = "Hi, Im Gilang Suprobo".split("");
    console.log("a", sentence)

    return (
        <div className='container px-20 py-20'>
            <div className=''>
                <div data-aos="fade-left" className='text-white text-left'>
                    {sentence.map((letter, index) => {
                        return (
                            <TextSpan key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>
                        )
                    })}
                    <p className='flex flex-col' onClick={handleClick}>
                        <ListItemText />
                        {open ? 
                            <p className='mt-5'>About me<ExpandMore fontSize="large" className='cursor-pointer' /></p>
                            : <ExpandLess fontSize="large" className='cursor-pointer' />}
                    </p>
                    <Collapse in={!open} timeout="auto" unmountOnExit>
                        <motion.p
                            initial={{ y: "50%", opacity: 0, scale: 0.5 }}
                            animate={{y: 0, opacity: 1, scale: 1}}
                            exit={{ y: "50%", opacity: 0, transition: {duration: 0.1} }}
                            transition={{duration: 0.2, ease: "easeOut"}}
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

export default Profile
