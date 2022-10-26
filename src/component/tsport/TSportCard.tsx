import classNames from "classnames";
import classes from "./TSport.module.scss";

interface ITSportCardPropType {
    title?: string;
    adrees?: string;
    club?: string;
    photo? : string;
    selected?: boolean;
}

function    TSportCard({
    title= "Тест",
    adrees= "Тест",
    club= "Тест",
    photo= "",
    selected
}: ITSportCardPropType) {
    return ( 
        <section className={classNames(classes.tscard, selected? classes.tscard_active : "")}>
            <div className={classes.stcard_bg}>
                <img src={"http://localhost:6100/photos/get/" + photo} alt="Не удалось найти картинку" className={classes.tscard_bg_img} />
            </div>
            <div className={classes.container}>
                <h3 className={classes.title}>
                    {
                        title
                    }
                </h3>
                <div className={classes.content}>
                    <button className={classes.btn}>
                        Выбрать
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