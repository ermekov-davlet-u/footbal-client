import classNames from "classnames";
import { CSSProperties, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Menu.module.scss"
import { GiHamburgerMenu } from "react-icons/gi"
import { ImInstagram } from "react-icons/im"
import { VscChromeClose } from "react-icons/vsc"

function Menu() {

    const [ menu, setmenu ] = useState<CSSProperties>({
        top: "-100%",
        opacity: 0
    })

    let activeStyle: CSSProperties = {
        textDecoration: "none",
      };

    function showMenu(){
        setmenu({
            top: 0,
            opacity: 1
        })
    }

    function hideMenu(){
        setmenu({
            top: "-100%",
            opacity: 0
        })
    }

    return ( 
        <>
            <div className={classes.menu} style={menu}>
                <div className={classes.container}>
                    <div className={classes.header}>
                        <div className={classes.header_logo}>
                            <h2 className={classes.logo}>
                                Logo
                            </h2>
                        </div>
                        <div className={classes.header_link_wrap}>
                            <a href="https://react-icons.github.io/react-icons/search?q=burger" className={classes.header_link}>
                                <ImInstagram />
                            </a>
                        </div>
                    </div>
                    <button className={classes.close_btn_wrap}> 
                        <VscChromeClose className={classes.close_btn} onClick={hideMenu}/>
                    </button>
                    <nav className={classes.manu_nav}>
                        <ul className={classes.menu_ul}>
                            <li className={classes.menu_li} onClick={() => {
                                hideMenu()
                            }}>
                                <NavLink style={({ isActive }: { isActive: boolean}) =>
                                        isActive ? activeStyle : {}
                                        } className={classNames(classes.menu_link)} to="/" >Главная</NavLink>
                                </li>
                                <li className={classes.menu_li} onClick={() => {
                                    hideMenu()
                                }}>
                                    <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : {}
                                        } className={classNames(classes.menu_link)} to="/list" >Список</NavLink>
                                </li>
                                <li className={classes.menu_li} onClick={() => {
                                    hideMenu()
                                }}>
                                    <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : {}
                                        } className={classNames(classes.menu_link)} to="/forme/club" >Для вас</NavLink>
                                </li>
                                <li className={classes.menu_li} onClick={() => {
                                    hideMenu()
                                }}>
                                    <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : {}
                                        } className={classNames(classes.menu_link)} to="/regis" >Регистрация</NavLink>
                                </li>
                                <li className={classes.menu_li} onClick={() => {
                                    hideMenu()
                                }}>
                                    <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : {}
                                        } className={classNames(classes.menu_link)} to="/map" >Карта</NavLink>
                                </li>
                                <li className={classes.menu_li} onClick={() => {
                                    hideMenu()
                                }}>
                                    <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : {}
                                        } className={classNames(classes.menu_link)} to="/login" >Вход</NavLink>
                                </li>
                                <li className={classes.menu_li} onClick={() => {
                                    hideMenu()
                                }}>
                                    <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : {}
                                        } className={classNames(classes.menu_link)} to="/addition" >Дополнительно</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <button  className={classes.show_menu} onClick={showMenu}>
                <GiHamburgerMenu className={classes.close_btn} />
            </button>
        </>
     );
}

export default Menu;