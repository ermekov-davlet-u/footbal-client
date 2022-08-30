import classes from "./Slider.module.scss"

function AliderActive() {
    return ( 
        <div className={classes.main}>
            <div className={classes.bg}>
                <img src="images/soccer1.jpg" alt="Not found" className={classes.bg_img} />
            </div>
        </div >
     );
}

export default AliderActive;