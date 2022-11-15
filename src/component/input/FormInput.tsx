import classes from "./Input.module.scss"
import "../../style/adding.scss"
import { ChangeEvent, useState } from "react";
import classNames from "classnames";

export interface IFormInputPropType{
    type?: string;
    label?: string;
    placeHolder?: string;
    changeInp?: (text: string) => void;
    value?: string;
}

function FormInput({
    type = "",
    label = "Заголовок",
    placeHolder= "Введите текст",
    changeInp= () => {},
    value= ""
}: IFormInputPropType) {

    const [ focus, setFocus ] = useState(false)

    function onFocused(){
        setFocus(true)
    }
    function onBlured(){
        setFocus(false)
    }

    return ( 
        <div className={classes.imp_wrap}>
            <label htmlFor="" className={classNames(classes.inp_label, focus && classes.inp_label_min)}>
                {
                    label
                }
            </label>
            <input onFocus={onFocused}  onBlur={onBlured} type={type} placeholder={placeHolder} value={value} className={classNames(classes.inp, focus && classes.inp_active)} onInput={(e: ChangeEvent<HTMLInputElement>) => {
                changeInp(e.target.value);
            }}/>
        </div>
     );
}

export default FormInput;