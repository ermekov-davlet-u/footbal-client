import { useState } from "react"
import FormInput from "../input/FormInput";
import classes from "./Baner.module.scss"
import TextArea from './../input/TextArea';

function Section() {
    const [clubForm, setclubForm] = useState<{
        name: string;
        email: string;
        tel: string;
        age: number;
        desc: string;
    }>({
        name: '',
        email: '',
        tel: '',
        age: 1,
        desc: ""
    }) 

    function hundleClubFormAdres(text: string){
        setclubForm(state => {
            return {...state, adres: text}
        })
    }

    function hundleClubFormClubName(text: string){
        setclubForm(state => {
            return {...state, clubName: text}
        })
    }

    function hundleClubFormClubDesc(text: string){
        setclubForm(state => {
            return {...state, desc: text}
        })
    }
    return ( 
        <div className={classes.section}>
            <div className={classes.sectionContainer}>
                <div className={classes.content}>
                    <h2 className={classes.title}>
                    Fastest way to organize
                    </h2>
                    <p className={classes.text}>
                        Most calendars are designed for teams. 
                        Slate is designed for freelancers
                    </p>
                <div className={classes.sectionForm}>
                    <div className={classes.form_groups}>
                        <FormInput label="Ваше имя" value={clubForm.name} changeInp={hundleClubFormClubName}/>
                    </div>
                    <div className={classes.form_groups}>
                        <FormInput label="электронный адрес" value={clubForm.email} changeInp={hundleClubFormAdres}/>
                    </div>
                    <div className={classes.form_groups}>
                        <FormInput label="номер телефона" value={clubForm.email} changeInp={hundleClubFormAdres}/>
                    </div>
                        <TextArea changeInp={hundleClubFormClubDesc} value={clubForm.desc} label={"Примечание"}/>
                    </div>
                    <button className={classes.btnMore}>
                        Try For Free
                    </button>
                </div>
                <div className={classes.bg}>
                    <img src="/images/slide1.jpg" alt="Не найдено" className={classes.bgImage} />
                </div>
            </div>
            
        </div>
     );
}

export default Section;