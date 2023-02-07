import React from 'react'
import styles from './nav.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, NavDropdown, Button, Offcanvas } from "react-bootstrap";
import Image from 'next/image';
// import Styles from "./nav.module"
import { IoLogoYoutube } from 'react-icons/io';
import { BsTwitter } from 'react-icons/bs';
import { ImFire } from 'react-icons/im';
import { HiMenuAlt1 } from 'react-icons/hi';
import { FaFacebookF } from 'react-icons/fa';
import { useState } from 'react';
const Navigeter = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className={styles.nav__main__div}>
            <div className={styles.nav__logo}>
                <div className={styles.nav__menu} onClick={handleShow}><HiMenuAlt1 /></div>
                <Offcanvas show={show} onHide={handleClose} placement="top">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
                <Image
                    src="/images/OTTlogo.png"
                    alt="logo"
                    height={74}
                    width={80}
                />
            </div>
            <div className={styles.nav__search}>
                <input type="text" placeholder='🔍 Search Movies, Genres, OTT, Trends...' />
                <div className={styles.nav__trends}>
                    <ImFire style={{ color: "red", fontSize: "1.5rem" }} /><h4>OTT Trends</h4>
                </div>
            </div>
            <div className={styles.nav__links}>
                <IoLogoYoutube style={{ color: "red", fontSize: "2rem" }} />
                <BsTwitter style={{ color: "#0d6efd", fontSize: "2rem" }} />
                <FaFacebookF style={{ color: "#0a58ca", fontSize: "2rem" }} />
            </div>
        </div>
    );
}

export default Navigeter