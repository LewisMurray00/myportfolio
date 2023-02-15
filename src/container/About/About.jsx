import React, { useState, useEffect} from 'react'
import './About.scss'

import { motion } from 'framer-motion';

import { images } from '../../constants'

const abouts = [
  {
    title: 'Frontend Development',
    description: 'I feel have a great understanding with Frontend development',
    imgUrl: images.about01
  },
  {
    title: 'UI/UX',
    description: 'I have an good understanding of UX/UI',
    imgUrl: images.about02
  }
];

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I Know that having <span>Good development</span> <br /> means <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index)=>(
          <motion.div
          whileInView={{ opacity: 1}}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About