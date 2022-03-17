import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'


import img from '../assets/enclave-background.jpeg'
import shapeReshape from '../assets/shape-reshape.jpeg'
import deepsightRes from '../assets/deepsight-resonance.jpeg'
import craftScreen from '../assets/craft-screen.jpeg'
import adroit from '../assets/Adroit_Element.png'
import ascendant from '../assets/Ascendant_Alloy.png'
import drowned from '../assets/Drowned_Element.png'
import energetic from '../assets/Energetic_Element.png'
import mutable from '../assets/Mutable_Element.png'
import neutral from '../assets/Neutral_Element.png'
import resonant from '../assets/Resonant_Alloy.png'
import ruinous from '../assets/Ruinous_Element.png'
import memento from '../assets/memento.jpeg'
import { BackArrow } from './AllSvgs'

const MainContainer = styled.div`

background:
linear-gradient(
  rgba(0, 0, 0, 0.7), 
  rgba(0, 0, 0, 0.7)
),
url(${img}) no-repeat center center fixed;
}
background-size: cover;
position: relative;
height: 100vh;
overflow: auto;
display: flex;
align-items: center;
`
const Title = styled.div`
position: absolute;
top: 8%; right: 50%;
transform: translate(50%,-50%);
font-size: 32px;
color: #fff;
backdrop-filter: blur(2px);
border-bottom: 2px solid white;
padding: 0;
h1{
    text-align: center;
}
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
const CraftingContainer = styled.ul`
position: relative;
padding: 0;
top: 10rem;
height: 100vh; 
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
color: white;
`


const CraftCard = styled.div`
    margin: 20px;
    width: 50%;
    text-align: center;
    color: white;
    line-height: 1.5;
    img{
        height: 400px ;
        width: 700px;
        border: 1px solid white;
    };
`

const CraftingMats = styled.ul`
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const MatCard = styled.div`
    width: 30%;
    padding: 10px;
    margin: 10px;
    text-align: center;
    border: 1px solid white;
    backdrop-filter: blur(3px);
    h2{
        text-decoration: underline;
    }
`


const CraftingPage = () => {


    return (
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleX: 0 }} transition={{ duration: 1.5, staggerChildren: 3 }}>
            <MainContainer>
                <TopLeft>
                    <Link to="/">
                        <BackArrow height={40} width={40} fill='#fff' />
                    </Link>
                </TopLeft>
                <Title>
                    <h1>Intro to Crafting</h1>
                </Title>
                <motion.div initial={{ y: 1500 }} animate={{ y: 0 }} exit={{ y: 1500 }} transition={{ duration: 2.5 }}>
                    <CraftingContainer>
                        <CraftCard>
                            <img src={shapeReshape} alt='shape' />
                            <h3>Players will be given an Enigma Glaive as their first Resonant weapon to Shape. Components can be chosen to customize the Glaive (and other weapons), with more components unlocking as the Weapon Level increases. Weapons can only be Shaped at the Relic in The Enclave, accessible from the Throne World destination in the Director.</h3>
                        </CraftCard>
                        <CraftCard>
                            <img src={craftScreen} alt='craftscreen' />
                            <h3>1. Choose a Frame Intrinsic. Enhanced Intrinsics become available when a certain Weapon Level is reached.<br />
                                2. Choose a Barrel perk. The choices available will vary based on the type of weapon you are Shaping.<br />
                                3. Choose a Magazine perk. The choices available will vary based on the type of weapon you are Shaping.<br />
                                4. Choose a Trait. <br />
                                5. Choose another Trait <br />
                                6. Optional: Choose Momentos (not available on the first interaction with Crafting).
                                Once all components are chosen, press and hold the Shape button to create the weapon.</h3>
                        </CraftCard>
                        <CraftCard>
                            <img src={deepsightRes} alt='deepsight' />
                            <h3>Resonant Weapons contain Deepsight Resonance that must be Attuned so that the Resonant Materials can be extracted. Resonant Materials are used to improve Shaped weapons or can be used in the Shaping of new ones. Attuning weapons is near identical to weapon level progression, and can unlock Weapon Patterns. After unlocking Weapon Crafting, Resonant Weapons can be acquired by completing various activities and through world drop rewards.</h3>
                        </CraftCard>

                        <h1>Crafting Components</h1>

                        <CraftingMats>
                            <MatCard>
                                <img src={resonant} alt='resonant' />
                                <h2>Resonant Alloy</h2>
                                <p>Resonant Alloys are required in order to insert an intrinsic (adaptive, aggressive, precision, etc.). While each weapon has a type of intrinsic that cannot be changed (you cannot convert a precision into an aggressive, for example), at higher weapon levels you are able to select intrinsics that have Masterwork-like stat bonuses. There are different types of Resonant Alloys, and some are specific to certain activity types, such as Raids. Resonant Alloys are primarily obtained by dismantling weapons, but can also be rewarded for completing activities.</p>
                            </MatCard>

                            <MatCard>
                                <img src={ascendant} alt='ascendant' />
                                <h2>Ascendant Alloy</h2>
                                <p style={{ lineHeight: 2 }}>Ascendant Alloys and Resonant Elements are required for Enhanced Traits. Ascendant Alloys can be obtained from weekly Witch Queen campaign missions and Throne World Offensives. Alloys can also be purchased from the Cryptarch or Banshee-44 in the Tower.</p>
                            </MatCard>
                            <MatCard>
                                <img src={neutral} alt='neutral' />
                                <h2>Resonant Elements</h2>
                                <p style={{ lineHeight: 2.5 }}>Resonant Elements are required for Perk Components. All perks require Neutral Elements, with trait perks also needing specific types of Resonant Elements.</p>
                            </MatCard>
                            <MatCard>
                                <img src={adroit} alt='adroit' />
                                <h2>Adroit Element</h2>
                                <p>Adroit Elements: Weapon performance-related trait perks (handling, stability, etc.).</p>
                            </MatCard>
                            <MatCard>
                                <img src={drowned} alt='drowned' />
                                <h2>Drowned Element</h2>
                                <p>Drowned Elements: Raid-exclusive trait perks.</p>
                            </MatCard>
                            <MatCard>
                                <img src={energetic} alt='energetic' />
                                <h2>Energetic Element</h2>
                                <p>Energetic Elements: Ammo or Reload-related trait perks.</p>
                            </MatCard>
                            <MatCard>
                                <img src={mutable} alt='mutable' />
                                <h2>Mutable Element</h2>
                                <p>Mutable Elements: Ability modification-related trait perks.</p>
                            </MatCard>
                            <MatCard>
                                <img src={ruinous} alt='ruinous' />
                                <h2>Ruinous Element</h2>
                                <p>Ruinous Elements: Damage or projectile modification-related trait perks.</p>
                            </MatCard>
                            <MatCard>
                                <img src={memento} alt='memento' />
                                <h2>Mementos</h2>
                                <p>Mementos are optional crafting consumables that grant vanity options to crafted weapons, such as special Shaders and Trackers. Mementos can be acquired by completing specific activities.</p>
                            </MatCard>
                        </CraftingMats>

                    </CraftingContainer>
                </motion.div>

            </MainContainer>
        </motion.div >
    )
}


export default CraftingPage