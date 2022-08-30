import { useEffect, useRef, useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from '@trendyol-js/react-carousel';
import TSportCard from "../component/tsport/TSportCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Games() {

    const [ weekDay, setWeekDay ] = useState<Date[]>([]);

    const getWeekDay = () => {
        const date = new Date();
        const dayNums = [ 1, 1, 1, 1, 1, 1, 1 ];
        const a = dayNums.map( ( item: number ) => {
            return new Date(date.setDate( date.getDate() + item ));
        })
        setWeekDay(a);
    }
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef();
    const slider2 = useRef();

    const times: Array<{
        idTime: number,
        timeName: string
    }> = [
        {
            idTime: 1,
            timeName: "12:00"
        },
        {
            idTime: 2,
            timeName: "13:00"
        },
        {
            idTime: 3,
            timeName: "14:00"
        },
        {
            idTime: 4,
            timeName: "15:00"
        },
        {
            idTime: 5,
            timeName: "16:00"
        },
        {
            idTime: 6,
            timeName: "17:00"
        },
        {
            idTime: 7,
            timeName: "18:00"
        },
        {
            idTime: 8,
            timeName: "19:00"
        },
        {
            idTime: 9,
            timeName: "20:00"
        },
        {
            idTime: 10,
            timeName: "21:00"
        },
        {
            idTime: 11,
            timeName: "22:00"
        },
        {
            idTime: 12,
            timeName: "23:00"
        },
        {
            idTime: 13,
            timeName: "24:00"
        }
    ]

    useEffect(() => {
        getWeekDay()
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, [])

    return ( 
        <>
            <div className="main">
                <div style={{ padding: "0 30px", marginTop: 126, height: "280px"}}>
                    <Slider
                        asNavFor={nav1}
                        slidesToShow={3}
                        swipeToSlide={true}>
                        <div style={{background: "white", height: "280px"}}>
                            <TSportCard />
                        </div>
                        <div style={{background: "white", height: "280px"}}>
                            <TSportCard />
                        </div>
                        <div style={{background: "white", height: "280px"}}>
                            <TSportCard />
                        </div>
                        <div style={{background: "white", height: "280px"}}>
                            <TSportCard />
                        </div>
                        <div style={{background: "white", height: "280px"}}>
                            <TSportCard />
                        </div>
                        <div style={{background: "white", height: "280px"}}>
                            <TSportCard />
                        </div>
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
                                                    times.map(time => {
                                                        return (
                                                            <div className="table_row" onClick={() => {
                                                                    console.log(time.idTime, day)
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