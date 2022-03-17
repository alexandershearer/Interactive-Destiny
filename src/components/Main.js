import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { DestinyLogo } from './AllSvgs'

import img from '../assets/witch-queen-background.webp'

import ParticlesComp from '../subcomponents/Particles'



const MainContainer = styled.div`
background: url(${img}) no-repeat center center fixed;
background-size: cover;
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
    font-family:'Karla', sans-serif ;
    font-weight:500;
}
`

const Container = styled.div`
padding: 0;
margin: 0;
`


const Center = styled.button`
position: absolute;
top: 12%;
left: 49.3%;
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

transition: all 1s ease;
`

const BottomBar = styled.div`
background-color: rgb(23, 22, 22, 0.3);
position: absolute;
bottom: 0;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const STORY = styled(Link)`
color: #fff;
font-size: 12px;
text-decoration: none;
z-index:1;
`
const VENDORS = styled(Link)`
color: #fff;
font-size: 12px;
text-decoration: none;
z-index:1;
`

const CRAFTING = styled(Link)`
color: #fff;
font-size: 12px;
text-decoration: none;
z-index:1;
`


const Main = () => {

    const [click, setclick] = useState(false);

    const handleClick = () => setclick(!click);

    return (
        <motion.div initial={{ x: 1600 }} animate={{ x: 0 }} exit={{ x: 1600 }} transition={{
            duration: 2
        }}>
            <MainContainer>
                <Container>
                    <ParticlesComp />

                    <Center click={click}>
                        <DestinyLogo onClick={() => handleClick()} width={250} height={250} fill='#fff' />
                    </Center>

                    <BottomBar>
                        <STORY to="/story" click={click}>
                            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                Story
                            </motion.h2>
                        </STORY>
                        <VENDORS to="/vendors" click={click}>
                            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                Vendors
                            </motion.h2>
                        </VENDORS>
                        <CRAFTING to="/crafting" click={click}>
                            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                Crafting
                            </motion.h2>
                        </CRAFTING>
                    </BottomBar>

                </Container>

            </MainContainer>
        </motion.div >
    )
}

export default Main