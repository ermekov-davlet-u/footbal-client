import { useEffect, useState } from "react";
import TSportCard from "../component/tsport/TSportCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppDispatch, useAppSelector } from './../store/hook';
import { newPoles } from "../store/slice/poleSlice";
import ConfirmModal from './../component/Modal.tsx/Confirm';
import { IBookType, IPole } from "../store/models";
import { newTimes } from "../store/slice/timeSlice";
import { useNavigate } from "react-router-dom";
import { newBooks } from "../store/slice/bookSlice";


function Games() {
    const navigate = useNavigate()
    const [ weekDay, setWeekDay ] = useState<Date[]>([]);
    const [ confirmModal, setConfirmModal ] = useState<{
        show: boolean,
        idTime: number,
        dateBook: Date | null,
        del:{
            bookId: number,
            userId: number
        }
    }>({
        show: false,
        idTime: 0,
        dateBook : null,
        del:{
            bookId: 0,
            userId: 0
        }
    });
    const { times } = useAppSelector(state => state.time)
    const { pole } = useAppSelector(state => state.pole)
    const { user } = useAppSelector(state => state.user)
    const { books } = useAppSelector(state => state.book)
    const [currentPole, setCurrentPole] = useState<IPole>({
        idPole: 0,
        name: '',
        size: '',
        price: 0,
        photos: [],
        club: {
            idClub: 0,
            clubName: '',
            adres: ''
        }
    })
    const dispatch = useAppDispatch()
    const getWeekDay = () => {
        const date = new Date();
        const dayNums = [ 0, 1, 1, 1, 1, 1, 1 ];
        const a = dayNums.map( ( item: number ) => {
            return new Date(date.setDate( date.getDate() + item ));
        })
        setWeekDay(a);
    }
    async function getBook() {
        const res = await fetch("http://localhost:6100/book", {
            headers: {
                Authentication: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjQ5Nzc0OTgsImV4cCI6MTY2NDk3NzU1OH0.JjHixJ7eeC0_3LMPTCX0elsRozJ5J5OA9XgddQkdquA'
            }
        }).then(res => res.json());
        dispatch(newBooks(res))
    } 

    async function getBookByPole(id: number) {
        const res = await fetch("http://localhost:6100/book/" + id).then(res => res.json());
        dispatch(newBooks(res))
    } 

    async function getPoles() {
        const res = await fetch("http://localhost:6100/pole").then(res => res.json());
        dispatch(newPoles(res))
    } 

    async function getAllTime(){
        const times = await fetch("http://localhost:6100/time", {
            headers: {
                "Authorization": "Bearer " + user.access_token,
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .catch(err => {
            return[]
        });
        if(times.statusCode >= 200){
            navigate("/login")
            return null
        }
        
        if(times){
            dispatch(newTimes(times))
        }
    }

    useEffect(() => {
        getWeekDay()
        getBook()
        getPoles()
        getAllTime()
    }, [user.access_token])

    const hundlePole = (idPole: IPole) => {
        setCurrentPole( idPole )

    }
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      useEffect(() => {
        if(pole.length){
            hundlePole(pole[0])
            getBookByPole(pole[0].idPole)
        }
      }, [pole])

    return ( 
        <>
        {
            confirmModal.show && <ConfirmModal del={confirmModal.del} idTime={confirmModal.idTime} dateBook={confirmModal.dateBook} pole={currentPole} show={confirmModal.show} close={() => {
                setConfirmModal({
                    show: false,
                    idTime: 0,
                    dateBook: null,
                    del:{
                        bookId: 0,
                        userId: 0
                    }
                })
                getBookByPole(currentPole.idPole)
            }} />
        }
            <div className="main">
                <div style={{ padding: "0 30px", marginTop: 126, height: "280px" }}>
                    <Slider { ...settings }>
                        {
                            pole.map(pole => {
                                return(
                                    <div key={pole.idPole} className="slider_wrap" onClick={() => {
                                        hundlePole(pole)
                                        getBookByPole(pole.idPole)
                                        }}>
                                        <TSportCard selected={ pole.idPole == currentPole.idPole } photo={pole.photos[0]?.url} title={pole.name} club={pole.club.clubName} adrees={pole.club.adres} />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
                <div className="game">
                    <h2 className="game_title">               
                        Rhino Keynote Presentation Template
                    </h2>
                    <hr />
                    <div className="game_container">
                        <div className="game_table">
                            <div className="game_table_content">
                                {
                                    weekDay.map(day => {
                                        return (
                                            <div className="content_row">
                                                <div className="table_header">
                                                    {
                                                        day.toLocaleDateString()
                                                    }
                                                </div>
                                                {
                                                    times.map((time, i) => {
                                                        const a = books.find(b => {
                                                            return (new Date(b.dateBook).toLocaleDateString() == day.toLocaleDateString() && b.time.idTime == time.idTime)
                                                            }
                                                        )
                                                        if(a){
                                                            return (
                                                                <div key={time.idTime} className="table_row active" onClick={() => {
                                                                        setConfirmModal({
                                                                            show: true,
                                                                            idTime: 0,
                                                                            dateBook: day,
                                                                            del:{
                                                                                bookId: a.idBook,
                                                                                userId: a.user.id
                                                                            }
                                                                        });
                                                                    }}>
                                                                    {
                                                                        time.timeName
                                                                    }
                                                                </div>
                                                            )
                                                        }
                                                        return (
                                                            <div key={time.idTime} className="table_row" onClick={() => {
                                                                    setConfirmModal({
                                                                        show: true,
                                                                        idTime: time.idTime,
                                                                        dateBook: day,
                                                                        del:{
                                                                            bookId: 0,
                                                                            userId: 0
                                                                        }
                                                                    });
                                                                }}>
                                                                {
                                                                    time.timeName
                                                                }
                                                            </div>
                                                        )
                                                
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
     );
}

export default Games;