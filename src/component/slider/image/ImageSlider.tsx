import classes from "./Image.module.scss"
import classnames  from 'classnames';
import { GrPrevious, GrNext } from "react-icons/gr" 
import { useState } from 'react';
import { useEffect } from 'react';

interface ImagePropType{
} 

function ImageSlider( { 
 }: ImagePropType ) {
    const [ currentSlide, setCurrentSlide ] = useState<number>(1)
    const arr = [
        {
            url: "/images/slide1.jpg",
            title: "Ermekov Davlet"
        },
        {
            url: "/images/slide2.jpg",
            title: "Janboev Erkin"
        },
        {
            url: "/images/slide3.jpg",
            title: "Jamalbekov Erjan"
        },
        {
            url: "/images/slide3.jpg",
            title: "Jamalbeskov Erjan"
        },
        {
            url: "/images/slide3.jpg",
            title: "Jamalbekovs Erjan"
        },
        {
            url: "/images/slide3.jpg",
            title: "Jamalbesdkov Erjan"
        }
    ]
    const next = () => {
        if(currentSlide < arr.length) {
            const a = currentSlide + 1
            setCurrentSlide(a)
        }       
    }

    const prev = () => {
        if(currentSlide > 1) {
            const a = currentSlide - 1
            setCurrentSlide(a)
        }       
    }

    // useEffect(() => {
    //     setInterval(() => {
    //         setCurrentSlide(currentSlide + 1)
    //     }, 3000)
    // }, [])

    

    return ( 
        <div className={classnames(classes.slider)}>
            
            <div className={classes.slider_elems}>
                {
                    arr.map((item, i) => {
                        return <img src={item.url} key={item.title} alt="Not found image" className={classnames(classes.slider_elem, currentSlide == ++i ? classes.slider_elem_enabled : "")} />
                    })
                }
            </div>
            <div className="control">
                <GrPrevious className={classnames(classes.bx, classes.prev)} onClick={prev}/>
                <GrNext className={classnames(classes.bx, classes.next)} onClick={next}/>
            </div>
            <div className={classes.indicators}>
                {
                    arr.map((item, i) => {
                        return <span className={classnames(classes.indicator, currentSlide == ++i ? classes.indicator_enabled : "")}></span>
                    })
                }
            </div>
            <div className={classes.content}>
                {
                    arr.map((item, i) => {
                        return <h3 key={item.title} className={classnames(classes.content_title, currentSlide == ++i ? classes.content_title_enabled : "")}>{ item.title }</h3>
                    })
                }
            </div>
        </div>
     );
}

export default ImageSlider;