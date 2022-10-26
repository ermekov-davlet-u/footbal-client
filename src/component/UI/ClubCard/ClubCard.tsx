import classes from "./Club.module.scss";

function ClubCard() {
    return ( 
        <article className={classes.clubcard}>
            <div className={classes.clubcard_container}>
                <div className={classes.clubcard__bgimg}>
                    <img src="/images/slide1.jpg" className={classes.clubcard__img}/>
                </div>
                <div className={classes.clubcard_content}>
                    <div className={classes.clubcard_top}>
                        <h3 className={classes.clubcard_subtitle}>
                            PRODUCTIVITY
                        </h3>
                        <p className={classes.clubcard_top_text}>
                            3 days ago
                        </p>
                    </div>
                    <h2 className={classes.clubcard_title}>
                        7 Skills of Highly Effective Programmers
                    </h2>
                    <div className={classes.clubcard_text}>
                        Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to 
                        provide our own take on the topic. Here are our seven skills of effective programmers...
                    </div>
                    <div className={classes.clubcard_bottom}>
                        <div className={classes.clubcard_user}>
                            <div className={classes.user_imagewrap}>
                                <img src="/images/slide2.jpg" alt="" className={classes.user_image} />
                            </div>
                            <p className={classes.user_text}>
                                    Glen Williams
                            </p>
                        </div>
                        <button className={classes.clubcard_show}>
                            Show more
                        </button>
                    </div>
                </div>
            </div>
        </article>
     );
}

export default ClubCard;