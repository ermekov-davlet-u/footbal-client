import classes from "./Button.module.scss";
import { MouseEvent } from "react";

interface IButtonPropType {
    label?: string;
    btnClick?: (event: MouseEvent<HTMLDivElement>) => void
}

function Button({
    label= "",
    btnClick= () => {
        console.log("asdasd");
        
    }
}: IButtonPropType) {
    return ( 
        <div className={classes.botton_wrap}>
            <div className={classes.button} onClick={btnClick}><span>
                {
                    label
                }
            </span></div>
        </div>
     );
}

export default Button;