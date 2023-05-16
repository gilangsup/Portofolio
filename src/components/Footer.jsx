import React from 'react'
import {AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='text-white text-center'>
        <p>&copy; 2023 Gilang Suprobo</p>
        <p>Social Medias </p>
        <div className='flex justify-center space-x-4 mt-2'>
        <a target="_blank" href="#" className='text- cursor-pointer '><AiFillInstagram /></a>
        <a target="_blank" href="https://www.linkedin.com/in/gilang-suprobo-653706172/" className='text- cursor-pointer'><AiFillLinkedin /></a>
        <a target="_blank" href="https://twitter.com/gilangsprb" className='text- cursor-pointer'><AiFillTwitterCircle /></a>
        </div>
    </div>
  )
}

export default Footer