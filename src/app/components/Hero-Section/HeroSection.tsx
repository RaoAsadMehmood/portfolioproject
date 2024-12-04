import React from 'react'
import styles from './HeroSection.module.css'
import { interFont } from '../font'
import Button from '../button/Button'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';

function HeroSection() {
    return (
        <>
            <section className={`${styles.hero} ${interFont.className}`}>
                <h1>Hey! I'm <span>Rao Asad Mehmood </span> <br />
                    <span>I</span>'m a Front End web developer
                </h1>

                <p>I build sleek, responsive user interfaces for websites and applications using <span>React.js</span>  and <span>Next.js</span>. <br />
                </p>

                <Button text={"Hire Me"} />
                <div className={styles.social_IconsDiv}>
                    <FaFacebookF size={30} color='black' />
                    <FaXTwitter size={30} color='black' />
                    <FaInstagram size={30} color='black' />
                    <FaWhatsapp size={30} color='black' />
                </div>

                <div className={styles.bottomImgDiv}>
                    <Image src={'/Behnace.png'} alt={'Behance-Logo'} width={156} height={156}></Image>
                    <Image src={'/Upwork.png'} alt={'Upwork-Logo'} width={156} height={156}></Image>
                    <Image src={'/Freelancer.png'} alt={'Freelancer-Logo'} width={156} height={156}></Image>
                </div>
            </section>
        </>
    )
}

export default HeroSection