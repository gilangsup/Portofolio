import React from 'react'
import TextSpan from './TextSpan';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { motion, useAnimationControls } from 'framer-motion'


const Profile = () => {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const sentence = "Hi, Im Gilang Suprobo".split("");

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
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <motion.p
                            initial={{ y: "50%", opacity: 0, scale: 0.5 }}
                            animate={{y: 0, opacity: 1, scale: 1}}
                            exit={{ y: "50%", opacity: 0, transition: {duration: 0.1} }}
                            transition={{duration: 0.2, ease: "easeOut"}}
                            className='text-xl mt-5'>Had experiences as freelance developer by developing website using PHP and MySQL, I gained my
                            technical knowledge and skill by joining Frontend program in Alterra Academy. Beside learning Javascript,
                            ReactJs, HTML, and CSS, I also created individual and collaborations projects there.
                            Currently, I'm looking for Frontend Engineer position with a company where I can implement my ability
                            and grow up either my skills or personal growth.</motion.p>
                    </Collapse>

                </div>
            </div>
        </div>
    )
}

export default Profile
