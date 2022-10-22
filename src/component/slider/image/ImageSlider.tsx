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
    const next = () => {
        if(currentSlide < 3) {
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
                <img src="/images/slide1.jpg" alt="Not found image" className={classnames(classes.slider_elem, currentSlide == 1 ? classes.slider_elem_enabled : "")} />
                <img src="/images/slide2.jpg" alt="Not found image" className={classnames(classes.slider_elem, currentSlide == 2 ? classes.slider_elem_enabled : "")} />
                <img src="/images/slide3.jpg" alt="Not found image" className={classnames(classes.slider_elem, currentSlide == 3 ? classes.slider_elem_enabled : "")} />
            </div>
            <div className="control">
                <GrPrevious className={classnames(classes.bx, classes.prev)} onClick={prev}/>
                <GrNext className={classnames(classes.bx, classes.next)} onClick={next}/>
            </div>
            <div className={classes.indicators}>
                <span className={classnames(classes.indicator, currentSlide == 1 ? classes.indicator_enabled : "")}></span>
                <span className={classnames(classes.indicator, currentSlide == 2 ? classes.indicator_enabled : "")}></span>
                <span className={classnames(classes.indicator, currentSlide == 3 ? classes.indicator_enabled : "")}></span>
            </div>
            <div className={classes.content}>
                <h3 className={classnames(classes.content_title, currentSlide == 1 ? classes.content_title_enabled : "")}>Ermekov Davlet</h3>
                <h3 className={classnames(classes.content_title, currentSlide == 2 ? classes.content_title_enabled : "")}>Janboev Erkin</h3>
                <h3 className={classnames(classes.content_title, currentSlide == 3 ? classes.content_title_enabled : "")}>Jamalbekov Erjan</h3>
            </div>
        </div>
     );
}

export default ImageSlider;