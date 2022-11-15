
import FormInput from './../../component/input/FormInput';
import { useState } from 'react';
import Button from './../../component/button/Button';
import ClubCard from '../../component/UI/ClubCard/ClubCard';
import UploadFile from '../../component/UI/UploadFile/index';
import TextArea from '../../component/input/TextArea';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { useEffect } from 'react';
import axios from 'axios';
import { newclubs } from '../../store/slice/clubSlice';
import { Link } from 'react-router-dom';

export interface IClubForm {
    clubName: string,
    adres: string,
    desc: string,
}

function ClubForm() {

    const [clubForm, setclubForm] = useState<IClubForm>({
        clubName: '',
        adres: '',
        desc: ''
    }) 
    const dispatch = useAppDispatch()
    const { clubs } = useAppSelector(state => state.club) 

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
    async function createClub(){
        const res = await fetch("http://localhost:6100/club", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            cache: "no-cache",
            mode: "cors",
            body: JSON.stringify(clubForm)
        }).then(res => res.json());
        if(res?.idClub){
            setclubForm({
                clubName: '',
                adres: '',
                desc: '',
            }) 
            
        }        
    }

    async function getAllClubs(){
        const clubs = await axios.get("http://localhost:6100/club")
        dispatch(newclubs(clubs.data))
    }
    useEffect(() => {
        getAllClubs()
    }, [])

    return ( 
        <>
            <div className="form">
                <div className="form_groups">
                    <FormInput label="Название" value={clubForm.clubName} changeInp={hundleClubFormClubName}/>
                </div>
                <div className="form_groups">
                    <FormInput label="Адрес" value={clubForm.adres} changeInp={hundleClubFormAdres}/>
                </div>
                <TextArea changeInp={hundleClubFormClubDesc} value={clubForm.desc}/>

                <Button label='Добавить' btnClick={createClub} />

            </div>

            {
                clubs.map((item) => {
                    return <ClubCard {...item}/>
                })
            }
        </>
     );
}

export default ClubForm;



