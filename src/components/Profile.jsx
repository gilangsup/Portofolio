import React from 'react'
import TextSpan from './TextSpan';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { motion, useAnimationControls } from 'framer-motion'
import { AiFillTwitterCircle } from 'react-icons/ai';


const Profile = () => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const sentence = "Hi, Im Gilang Suprobo".split("");

    return (
        <div className='container px-20 py-20 bg-[#2c292f]  '>
            <div className='flex '>
                <div data-aos="fade-left" className='text-white text-left'>
                    <div className='flex '>
                    {sentence.map((letter, index) => {
                        return (
                            <TextSpan key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>
                            
                        )
                    })}
                    <img src='https://i.pinimg.com/originals/1f/e8/00/1fe800748f1c9bafd70488f1062e76f1.gif' className='w-[100px] flex justify-end'/>
                    </div>
                    <p className='flex flex-col' onClick={handleClick}>
                        <ListItemText />
                        {open ? 
                            <p className='mt-5 cursor-pointer'>About me<ExpandMore fontSize="large" /></p>
                            : <p className='cursor-pointer'><ExpandLess fontSize="large"  />Touch me!</p>}
                    </p>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <motion.p
                            initial={{ y: "50%", opacity: 0, scale: 0.5 }}
                            animate={{y: 0, opacity: 1, scale: 1}}
                            exit={{ y: "50%", opacity: 0, transition: {duration: 0.1} }}
                            transition={{duration: 0.2, ease: "easeOut"}}
                            className='text-lg mt-5'>I had experiences as freelance developer by developing website using library ReactJS, I gained my
                            technical knowledge and skill by joining Frontend program in Alterra Academy. I`m learning Javascript,
                            ReactJs, HTML, and CSS, for being advance in that techs. I also created individual and collaborations projects there.
                            Currently, I'm looking for Frontend Engineer position with a company where I can implement my ability
                            and grow up either my skills or personal growth.</motion.p>
                            <img src="https://i.pinimg.com/originals/0c/a8/96/0ca8968070257635299b1fe038384838.gif" className='w-[300px] mt-5' alt="gif"/>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default Profile
