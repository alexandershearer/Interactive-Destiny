import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'


import img from '../assets/tower-wallpaper.jpg'
import zavala from '../assets/Zavala.webp'
import shaxx from '../assets/Shaxx.jpeg'
import gunsmith from '../assets/Gunsmith.png'
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
const Vendors = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;

    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 73vw;
    margin: auto;
`

const ImageDiv = styled.div`
    border: 1px solid #fff;
    background-color: white;
    height: 475px;
    position relative;
    object-fit: cover;
    opacity: 0.9;
    transition: 0.6s ease-in-out;
    transform: skew(-3deg);


    &:hover,
    &:focus {
    opacity: 1;
    transform: scaleY(1.04) skew(-3deg);
    }
    &:active {
    opacity: 1;
    }
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        transition: 0.6s ease-in-out;

        &:hover,
        &:focus {
        transform: skew(-3deg);
        opacity: 0.3;
        transform: scale(1.1);
    };
`

const Description = styled.div`
    align-content: center;
    position: absolute;
    width: 95%;

    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: -1;
    line-height: 2;
    font-weight: 600;
`

const Title = styled.div`
    align-content: center;
    text-align: center;
    position: absolute;
    width: 70%;
    font-size: 21px;
    text-decoration: underline;
    padding-bottom: 10px;

    top: 5%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: -1;
`
const PageTitle = styled.div`
    position: absolute;
    text-align: center;
    transform: translate(75%, 0%);
    font-size: 32px;
    bottom: 5%;
    color: #fff;
    backdrop-filter: blur(5px);
    border-bottom: 2px solid white;
`


const VendorsPage = () => {


    return (
        <motion.div initial={{ y: 1200 }} animate={{ y: 0 }} exit={{ y: 1200 }} transition={{ duration: 2, staggerChildren: 2, type: 'spring', stiffness: 40 }}>
            <MainContainer>
                <TopLeft>
                    <Link to="/">
                        <BackArrow height={40} width={40} fill='#fff' />
                    </Link>
                </TopLeft>
                <Vendors>
                    <ImageDiv style={{ background: "linear-gradient(180deg, rgba(27,27,27,1) 0%, rgba(0,95,185,1) 100%)", color: "#fff" }} >
                        <img src={zavala} alt='zavala' />
                        <Title>Commander Zavala</Title>
                        <Description>
                            Commander Zavala is an Awoken Guardian who serves as the Vanguard of the Titan class, and overall Vanguard Commander of The Last City. Stern and uncompromising, Zavala's only goal is to safeguard humanity within the Last City against all threats. He oversees all Guardian military operations, and led the Guardians to victory in both the Taken War and Red War. In the aftermath of both conflicts, Zavala has become increasingly isolated and reluctant to commit Guardians to conflicts outside of the Last City.
                        </Description>
                    </ImageDiv>
                    <ImageDiv style={{ background: "linear-gradient(180deg, rgba(108,108,108,1) 0%, rgba(140,0,0,1) 100%)", color: "#fff" }}>
                        <img src={shaxx} alt='shaxx' />
                        <Title>Lord Shaxx</Title>
                        <Description>
                            Lord Shaxx is the Titan manager of the Crucible and a vendor for Crucible-related items. He is found in the Tower near the Vanguard. However, in Destiny 2 he is located in the Courtyard, behind the vaults. He is assisted in his duties by Arcite 99-40, the Crucible Quartermaster. He does serve as a vendor in Destiny 2. Lord Shaxx also serves as the announcer in the Crucible, with the exception of the monthly Iron Banner tournament, which is hosted by Lord Saladin Forge and Trials of Osiris, which is hosted by Saint-14.
                        </Description>
                    </ImageDiv>
                    <ImageDiv style={{ background: "linear-gradient(180deg, rgba(0,16,121,1) 0%, rgba(135,136,0,1) 100%)", color: "#fff" }}>
                        <img src={gunsmith} alt='gunsmith' />
                        <Title>Banshee-44</Title>
                        <Description>
                            Banshee-44 is an Exo Gunsmith, located within the Tower on the far right side of the Vault and the far left of the Cryptarch. He sells weapons for field testing, telemetries that increase upgrade weapons for a certain type of weapon, and ammo synthesis items for Guardians. He can also sell legendary weapons that arrive on Armsday, if the player has earned enough reputation by testing weapons for him.
                        </Description>
                    </ImageDiv>
                </Vendors>
                <PageTitle>
                    Many more vendors are left to discover!!
                </PageTitle>
            </MainContainer>
        </motion.div >
    )
}


export default VendorsPage