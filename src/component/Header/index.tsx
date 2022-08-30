import classes from "./Header.module.scss"
import { AiFillTwitterSquare } from "react-icons/ai"


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
                        <div className={classes.header_icon}>
                            <AiFillTwitterSquare className={classes.icon} />
                        </div>
                        <div className={classes.header_icon}>
                            <AiFillTwitterSquare className={classes.icon} />
                        </div>
                        <div className={classes.header_icon}>
                            <AiFillTwitterSquare className={classes.icon} />
                        </div>
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