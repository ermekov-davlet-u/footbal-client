import classes from "./Slider.module.scss";
import classnames  from 'classnames';


interface ISliderCard{
    active?: boolean;
    changeActive?: () => void
}

function SliderCard({active = false, changeActive = () => {}}: ISliderCard) {
    return ( 
        <article className={classnames(classes.card, active && classes.active)} onClick={changeActive}>
            <div className={classes.card_container}>
                <div className={classes.image}>
                    <img src="images/soccer.jpg" className={classes.img} />
                </div>
                <div className={classes.content}>
                    <h2 className={classes.title}>
                        Lorem ipsum dolor sit.
                    </h2>
                    <h5 className={classes.subtitle}>
                        Lorem, ipsum dolor.
                    </h5>
                </div>
            </div>
        </article>
     );
}

export default SliderCard;