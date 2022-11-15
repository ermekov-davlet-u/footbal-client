import { useParams } from "react-router-dom";
import Section from "../component/baner/Section";
import ImageSlider from "../component/slider/image/ImageSlider";
import PoleTimeBook from "../component/UI/PoleTimeBook";


function ClubShow() {

    const { idClub } = useParams()
    
    
    return ( 
        <div className="main" >
            <div className="clubShow">
                <ImageSlider />
                <div className="clubShow_book">
                    <PoleTimeBook />
                    <PoleTimeBook />
                </div>
                <Section />
            </div>
        </div>
     );
}

export default ClubShow;