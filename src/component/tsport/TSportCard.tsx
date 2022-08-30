import classes from "./TSport.module.scss";

function TSportCard() {
    return ( 
        <section className={classes.tscard}>
            <div className={classes.stcard_bg}>
                <img src="/images/soccer.jpg" className={classes.tscard_bg_img} />
            </div>
            <div className={classes.container}>
                <h3 className={classes.title}>
                    Lorem ipsum dolor sit.
                </h3>
                <div className={classes.content}>
                    <button className={classes.btn}>
                        More info ...
                    </button>
                    <a href="#" className={classes.link}>
                        Зал расположен по адресу ул. Смольная, 12
                    </a>
                </div>
            </div>
        </section>
     );
}

export default TSportCard;