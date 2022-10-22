import classes from "./Login.module.scss"
import classNames from 'classnames';
import { ChangeEvent, useState } from "react";
import { myhttp } from "../../untils/http";
import { useAppDispatch } from './../../store/hook';
import { newUser } from "../../store/slice/userSlice";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const [userForm, setUserForm ] = useState<{
        userName: string,
        email: string,
        password: string,
    }>({
        userName: '',
        email: '',
        password: '',
    })
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const changeFormLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setUserForm(state => {
            state.userName = e.target.value;
            return state
        })
    }
    const changeFormPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setUserForm(state => {
            state.password = e.target.value;
            return state
        })
    }
    const changeFormEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setUserForm(state => {
            state.email = e.target.value;
            return state
        })
    }
    async function loginAction(){
        const userLogin = await myhttp.post("auth/login", {
        ...userForm
        } )
        if(userLogin){
            dispatch(newUser(userLogin.data))
            localStorage.setItem("user", JSON.stringify(userLogin.data))
            navigate("/")
        }
    }

    return ( 
        <>
        <div className={classes.login}>
            <h2 className={classes.login_title}>Фома регистрации</h2>
            <div className={classNames(classes.container, classes.login_wrap)} id="container">
                <div className={classNames(classes.form, classes.container, classes.signupcontainer)}>
                    <h1>Выход в аккаунт</h1>
                    <input type="text" onInput={changeFormLogin} placeholder="Имя пользователя" />
                    <input type="email" onInput={changeFormEmail} placeholder="Адрес электронной почты" />
                    <input type="password" onInput={changeFormPassword} placeholder="Пароль" />
                    <button className={classes.button} onClick={loginAction}>Вход</button>
                </div>
            </div>
        </div>
        </>
     );
}

export default LoginPage;