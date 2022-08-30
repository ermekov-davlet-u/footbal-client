import classes from "./TSport.module.scss";
import TSportCard from './TSportCard';

function TSport() {
    return ( 
        <div className={classes.tsport} >
            <div className={classes.container}>
                <div className={classes.tsport_title}>
                    <h2 className={classes.title_text}>
                        Ганвест - Никотин (Offical video)
                    </h2>
                </div>
                <div className={classes.cards_wrap}>
                    <TSportCard />
                    <TSportCard />
                    <TSportCard />
                    <TSportCard />
                    <TSportCard />
                    <TSportCard />
                    <TSportCard />
                    <TSportCard />
                </div>
            </div>
        </div>
     );
}

export default TSport;