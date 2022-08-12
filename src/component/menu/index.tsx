import classNames from "classnames";
import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Menu.module.scss"
import { AiFillCloseSquare } from "react-icons/ai"

function Menu() {


    let activeStyle: CSSProperties = {
        textDecoration: "none",
      };

    return ( 
        <>
            <div className={classes.menu}>
                <div className={classes.container}>
                    <button className={classes.close_btn_wrap}> 
                        <AiFillCloseSquare className={classes.close_btn}/>
                    </button>
                    <nav className={classes.manu_nav}>
                        <ul className={classes.menu_ul}>
                            <li className={classes.menu_li}>
                                <NavLink style={({ isActive }: { isActive: boolean}) =>
                                        isActive ? activeStyle : {}
                                        } className={classNames(classes.menu_link)} to="/" >Главная</NavLink>
                                </li>
                                <li className={classes.menu_li}>
                                    <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : {}
                                        } className={classNames(classes.menu_link)} to="/list" >Список</NavLink>
                                </li>
                                <li className={classes.menu_li}>
                                    <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : {}
                                        } className={classNames(classes.menu_link)} to="/forme" >Для вас</NavLink>
                                </li>
                                <li className={classes.menu_li}>
                                    <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : {}
                                        } className={classNames(classes.menu_link)} to="/regis" >Регистрация</NavLink>
                                </li>
                                <li className={classes.menu_li}>
                                    <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : {}
                                        } className={classNames(classes.menu_link)} to="/map" >Карта</NavLink>
                                </li>
                                <li className={classes.menu_li}>
                                    <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : {}
                                        } className={classNames(classes.menu_link)} to="/addition" >Дополнительно</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
     );
}

export default Menu;