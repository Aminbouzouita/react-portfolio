import React from "react";
import "./style.css";
import githubLogo from "./../../assets/img/25231.png"
import phoneLogo from "./../../assets/img/844e8cd4ab26c82286238471f0e5a901.png";
import mailLogo from "./../../assets/img/8fc37b74b608a622588fbaa361485f32.png";
import linkedlnLogo from "./../../assets/img/ce093c7214ad357bb665cfd2f66a8b6b.png";
import Link from "../Link/Link";
import Image from "../Image/Image";
import Container from "../Container/Container";
function Footer() {
    return (
        <Container className="Container">
             <ContactWrap className="row footer">
                <Link href="https://github.com/Aminbouzouita">
                    <Image
                        className="contact-links"
                        src={githubLogo}
                        alt="contact-logos"
                    /></Link>
                <Link href="tel:001-714-329-3765">
                    <Image
                        className="contact-links"
                        src={phoneLogo}
                        alt="contact-logos"
                    />
                </Link>
                <Link href="mailto:aminbouzouita@yahoo.com" >
                    <Image
                        className="contact-links"
                        src={mailLogo}
                        alt="contact-logos"
                    />
                </Link>
                <Link href="https://www.linkedin.com/in/amin-bouzouita-53bb911aa/">
                    <Image
                        className="contact-links"
                        src={linkedlnLogo}
                        alt="contact-logos"
                    />
                </Link>
                </ContactWrap>
          </Container> 
    );
}

export default Footer;