import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'


import img from '../assets/vow-raid-background.jpeg'
import fireteam from '../assets/fireteam.jpeg'
import { BackArrow } from './AllSvgs'

const MainContainer = styled.div`

background:
linear-gradient(
  rgba(0, 0, 0, 0.6), 
  rgba(0, 0, 0, 0.6)
),
url(${img}) no-repeat center center fixed;
}
background-size: cover;
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`

const TopLeft = styled.button`
position: absolute;
top: 5%;
left: 2%;
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

transition: all 1s ease;
`

const InfoParagraph = styled.div`
border:2px solid #bfbfbf;
color: #fff;
padding:2rem;
width: 38vw;
height: 43vh;
z-index:3;
line-height: 1.5;
display:flex;
justify-content-center;
align-items: center;
font-size: calc(0.6rem + 0.8vw);
backdrop-filter: blur(5px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;
font-family: 'Ubuntu Mono',monospace;

}
`

const Fireteam = styled.div`
border: 2px solid #bfbfbf;
padding: 0;
border-left: 0px;
position: absolute;
width: 42vw;
right: 5%;
top: 10.5rem;
img{
    width: 100%;
    height: auto;
}
`

const BottomLink = styled.div`
position: absolute;
text-align: center;
transform: translate(75%, 0%);
bottom: 5%;
color: #fff;
border-bottom: 1px solid white;
    a{
        color: white;
        text-decoration: none;
    }
`


const StoryPage = () => {


    return (
        <motion.div initial={{ x: -1500 }} animate={{ x: 0 }} exit={{ x: -1500 }} transition={{ duration: 1.5, staggerChildren: 2 }}>
            <MainContainer>
                <TopLeft>
                    <Link to="/">
                        <BackArrow height={40} width={40} fill='#fff' />
                    </Link>
                </TopLeft>
                <motion.div initial={{ x: -1500, animationDelay: 10 }} animate={{ x: 0 }} exit={{ x: -1500 }} transition={{ duration: 2.5, ease: 'easeIn', type: 'spring' }}>
                    <InfoParagraph>
                        A twisted wonderland of corruption and splendor, Savathûn’s Throne World plays host to a fragile balance of power. From her palace to the swamp, all that she hides can be found here. Delve into Savathûn’s Throne World to uncover the mystery of how she and her Lucent Hive stole the Light. Learn the secrets to crafting new weapons, the new Glaive, and survive the truth within her web of lies.
                    </InfoParagraph>
                </motion.div>
                <motion.div initial={{ x: 1200, animationDelay: 10 }} animate={{ x: 0 }} exit={{ x: 1200 }} transition={{ duration: 2.5, ease: 'easeIn', type: 'tween' }}>
                    <Fireteam>
                        <img src={fireteam} alt='fireteam' />
                    </Fireteam>
                </motion.div>
                <BottomLink>
                    <a href='https://www.bungie.net/7/en/Destiny/WitchQueen'>
                        <h1>Learn more about the story at Bungie!!</h1>
                    </a>
                </BottomLink>
            </MainContainer>
        </motion.div >
    )
}


export default StoryPage