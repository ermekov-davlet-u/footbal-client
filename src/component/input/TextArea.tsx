import { ChangeEvent } from "react";
import { IFormInputPropType } from "./FormInput";
import classes from "./Input.module.scss"


function TextArea({
    type = "",
    label = "Описание",
    placeHolder= "",
    changeInp= () => {},
    value= ""
}: IFormInputPropType) {
    return ( 
        <div className={classes.textAreaWrap}>
            <h4 className={classes.textAreaLabel}>
                {
                    label
                }
            </h4>
            <textarea placeholder="Введите текст" rows={5}  className={classes.textArea} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                changeInp(e.target.value)
            }}>{
                value
            }</textarea>
        </div>
     );
}

export default TextArea;