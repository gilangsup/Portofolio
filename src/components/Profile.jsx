import React from 'react'
import PhotoProfile from '../assets/pp.png'

const Profile = () => {

    const sentence = "Hi, Im Gilang Suprobo".split(/(\s+)/);

    return (
        <div className='container px-20 py-20'>
            <div className='lg:flex justify-center'>
                <div className='px-20 mx-10'>
                    <img data-aos="fade-right" src={PhotoProfile} className="rounded-md lg:w-[1000px] h-[230px] md:w-[500px]:h-[200px]" />
                </div>
                <div data-aos="fade-left" className='text-zinc-400 lg:flex sm:text-left lg:mt-0 md:mt-5 sm:mt-5 px-20'>
                    {sentence.map((letter, index) => {
                        return (
                                <span key={index} className='text-xl'>{letter}</span>
                        )
                    })}
                </div>
                    <p className='text-sm text-left'>I am a Frontend Engineer who has graduated from Alterra Academy Bootcamp. 
                        I learned technology especially website development since 2019 . 
                        I am interested in front-end development because I like to learn ReactJS, HTML , CSS and Javascript . 
                        I’m seeking employment as a Frontend Engineer with a company where 
                        I can implement my ability and grow up either my skills or personality.</p>
             
            </div>
        </div>
    )
}

export default Profile
