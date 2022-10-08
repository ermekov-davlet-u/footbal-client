import classes from "./Login.module.css"
import classNames from 'classnames';
import { ChangeEvent, useState } from "react";

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
    function loginAction(){
        console.log(userForm);
        
    }

    return ( 
        <>
        <div className={classes.login}>
            <h2>Фома регистрации</h2>
            <div className={classNames(classes.container, classes.login_wrap)} id="container">
                <div className={classNames(classes.form, classes.container, classes.signupcontainer)}>
                    <h1>Выход в аккаунт</h1>
                    <input type="text" onInput={changeFormLogin} placeholder="Имя пользователя" />
                    <input type="email" onInput={changeFormEmail} placeholder="Адрес электронной почты" />
                    <input type="password" onInput={changeFormPassword} placeholder="Пароль" />
                    <button onClick={loginAction}>Вход</button>
                </div>
            </div>
        </div>
        </>
     );
}

export default LoginPage;