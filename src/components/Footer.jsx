import React from 'react'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='footer'>
            <p>Design by <span><a target="_blank" href='https://www.linkedin.com/in/dilazarte/'>@dilazarte</a></span> /
            <span><a target="_blank" href='https://github.com/dilazarte'> <AiFillGithub/></a></span>
            </p>
        </div>
    )
}

export default Footer