import classes from "./Header.module.scss"
import { BsFacebook, BsTelegram } from "react-icons/bs"
import { AiFillTwitterCircle, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai"
import classNames from 'classnames';


function Header() {
    return ( 
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.header_left}>
                    <div className={classes.header_logo}>
                        <h1 className={classes.header_logo_title}>
                            Logo
                        </h1>
                    </div>
                    <p className={classes.header_logo_text}>
                        Upgrade your plan
                    </p>
                </div>
                <div className={classes.header_right}>
                    <div className={classes.header_icons}>
                    <ul className={classes.wrapper}>
                        <li className={classNames(classes.icon, classes.facebook)}>
                            <span className={classes.tooltip}>Facebook</span>
                            <span><BsFacebook className={classes.target} /></span>
                        </li>
                        <li className={classNames(classes.icon, classes.twitter)}>
                            <span className={classes.tooltip}>Twitter</span>
                            <span><AiFillTwitterCircle className={classes.target} /></span>
                        </li>
                        <li className={classNames(classes.icon, classes.instagram)}>
                            <span className={classes.tooltip}>Instagram</span>
                            <span><AiFillInstagram className={classes.target} /></span>
                        </li>
                        <li className={classNames(classes.icon, classes.github)}>
                            <span className={classes.tooltip}>Github</span>
                            <span><AiOutlineWhatsApp className={classes.target}/></span>
                        </li>
                        <li className={classNames(classes.icon, classes.youtube)}>
                            <span className={classes.tooltip}>Youtube</span>
                            <span><BsTelegram  className={classes.target}/></span>
                        </li>
                    </ul>
                    </div>
                    <div className={classes.header_right_link}>
                        <a href="" className={classes.link}>
                            Français
                        </a>
                    </div>
                </div>
            </div>
        </header>
     );
}

export default Header;