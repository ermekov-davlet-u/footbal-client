import classes from "./TSport.module.scss";

interface ITSportCardPropType {
    title?: string;
    adrees?: string;
    club?: string;
}

function TSportCard({
    title= "Тест",
    adrees= "Тест",
    club= "Тест",
}: ITSportCardPropType) {
    return ( 
        <section className={classes.tscard}>
            <div className={classes.stcard_bg}>
                <img src="/images/soccer.jpg" className={classes.tscard_bg_img} />
            </div>
            <div className={classes.container}>
                <h3 className={classes.title}>
                    {
                        title
                    }
                </h3>
                <div className={classes.content}>
                    <button className={classes.btn}>
                        {
                            club
                        }
                    </button>
                    <a href="#" className={classes.link}>
                        {
                            adrees
                        }
                    </a>
                </div>
            </div>
        </section>
     );
}

export default TSportCard;