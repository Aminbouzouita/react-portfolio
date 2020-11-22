import React from "react";
import "./style.css";
import githubLogo from "./../../assets/img/25231.png"
import phoneLogo from "./../../assets/img/844e8cd4ab26c82286238471f0e5a901.png";
import mailLogo from "./../../assets/img/8fc37b74b608a622588fbaa361485f32.png";
import linkedlnLogo from "./../../assets/img/ce093c7214ad357bb665cfd2f66a8b6b.png";

function Footer() {
    return (
        <div class="row footer">
            <div className="col-12 footer-form">
                <a href="https://github.com/Aminbouzouita" target="-blank"> <img alt="" className="img-contact" src={githubLogo} /></a>
                <a href="tel:001-714-329-3765"> <img alt="" className="img-contact" src={phoneLogo} /></a>
                <a href="mailto:aminbouzouita@yahoo.com" target="-blank"> <img alt="" className="img-contact" src={mailLogo} /></a>
                <a href="https://www.linkedin.com/in/amin-bouzouita-53bb911aa/" target="-blank"> <img alt="" className="img-contact" src={linkedlnLogo} /></a>
            </div>
            <div className="col-12">
                <p class="text-footer">Copyright &copy; 2020 Amin Bouzouita</p>
            </div>
        </div>

    );
}

export default Footer;