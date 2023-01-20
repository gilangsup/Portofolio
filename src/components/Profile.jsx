import React from 'react'
import PhotoProfile from '../assets/pp.png'
import TextSpan from './TextSpan';

const Profile = () => {

    const sentence = "Hi, Im Gilang Suprobo".split("");
    console.log("a",sentence)

    return (
        <div className='container px-20 py-20'>
            <div className='lg:flex justify-center'>
                <div data-aos="fade-left" className='text-zinc-400 px-20'>
                    {sentence.map((letter, index) => {
                        return (
                                <TextSpan key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>
                        )
                    })}
               
                    <p className='text-sm text-left mt-5'>I am a Frontend Engineer who has graduated from Alterra Academy Bootcamp. 
                        I learned technology especially website development since 2019 . 
                        I am interested in front-end development because I like to learn ReactJS, HTML , CSS and Javascript . 
                        I’m seeking employment as a Frontend Engineer with a company where 
                        I can implement my ability and grow up either my skills or personality.</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
