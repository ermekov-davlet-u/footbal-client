import { Link } from "react-router-dom";
import { IClubForm } from "../../../pages/form/Club";
import { ClubCardType, IPolePhotoType } from "../../../store/models";
import classes from "./Club.module.scss";



function ClubCard({
    clubName,
    adres,
    desc,
    idClub,
    isActive,
    photos = []
}: ClubCardType) {
    return ( 
        <article className={classes.clubcard}>
            <div className={classes.clubcard_container}>
                <div className={classes.clubcard__bgimg}>
                    {
                        photos[0]?.url && 
                            <img src={"http://localhost:6100/club-photo/get/" + photos[0]?.url} className={classes.clubcard__img}/>
                        
                    }
                </div>
                <div className={classes.clubcard_content}>
                    <div className={classes.clubcard_top}>
                        <h3 className={classes.clubcard_subtitle}>
                            {
                                adres
                            }
                        </h3>
                        <p className={classes.clubcard_top_text}>
                            3 days ago
                        </p>
                    </div>
                    <h2 className={classes.clubcard_title}>
                        {
                            clubName
                        }
                    </h2>
                    <div className={classes.clubcard_text}>
                        {
                            desc
                        }
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
                        <Link to={"/club/" + idClub} className={classes.clubcard_show}>
                            Show more
                        </Link>
                    </div>
                </div>
            </div>
        </article>
     );
}

export default ClubCard;