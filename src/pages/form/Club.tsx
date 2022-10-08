
import FormInput from './../../component/input/FormInput';
import { useState } from 'react';
import Button from './../../component/button/Button';

interface IClubForm {
    clubName: string,
    adres: string
}

function ClubForm() {

    const [clubForm, setclubForm] = useState<IClubForm>({
        clubName: '',
        adres: ''
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
    async function createClub(){
        const res = await fetch("http://localhost:3000/club", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            cache: "no-cache",
            mode: "cors",
            body: JSON.stringify(clubForm)
        }).then(res => res.json());
        console.log(res);
        
    }

    return ( 
        <>
            <div className="form_groups">
                <FormInput label="Название" value={clubForm.clubName} changeInp={hundleClubFormClubName}/>
            </div>
            <div className="form_groups">
                <FormInput label="Адрес" value={clubForm.adres} changeInp={hundleClubFormAdres}/>
            </div>
            <Button label='Добавить' btnClick={createClub} />
        </>
     );
}

export default ClubForm;



