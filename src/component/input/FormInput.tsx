import classes from "./Input.module.scss"
import "../../style/adding.scss"
import { ChangeEvent } from "react";

interface IFormInputPropType{
    type?: string;
    label?: string;
    placeHolder?: string;
    changeInp?: (text: string) => void;
    value?: string;
}

function FormInput({
    type = "",
    label = "text",
    placeHolder= "",
    changeInp= () => {},
    value= ""
}: IFormInputPropType) {
    return ( 
        <div className={classes.imp_wrap}>
            <label htmlFor="" className={classes.inp_label}>
                {
                    label
                }
            </label>
            <input type={type} placeholder={placeHolder} value={value} className={classes.inp} onInput={(e: ChangeEvent<HTMLInputElement>) => {
                changeInp(e.target.value);
            }}/>
        </div>
     );
}

export default FormInput;