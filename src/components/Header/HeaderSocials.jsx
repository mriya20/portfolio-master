import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


import 'aos/dist/aos.css'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a data-aos="fade-down" data-aos-duration="1500" href="https://www.linkedin.com/in/anastasiia-markova200/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a data-aos="fade-down" data-aos-duration="1200" href="https://github.com/mriya20" target="_blank" rel="noreferrer"><FaGithub /></a>

        </div>
    )
}

export default HeaderSocials