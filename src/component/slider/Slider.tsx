import classes from "./Slider.module.scss";
import SliderCard from "./SliderCard";
import AliderActive from './SliderActive';
import { useState } from "react";

function Slider() {

    const [ activeSlider, setActiveSlider ] = useState<number>(0)

    return ( 
        <section className={classes.slider}>
            <div className={classes.container}>
                <div className={classes.slide}>
                    <div className={classes.swipe}>
                        {
                            [1,2,3,4,5].map(function(i) {  
                                if(i === activeSlider) return <SliderCard active={true} />
                                return <SliderCard changeActive={() => {
                                    setActiveSlider(i)
                                }} />
                            })
                        }
                    </div>
                </div>
                <AliderActive />
            </div>
        </section>
     );
}

export default Slider;