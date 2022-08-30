
import { UIEvent } from 'react';
import MainBaner from './../component/baner/MainBaner';
import Slider from './../component/slider/Slider';
import TSport from './../component/tsport/index';

function Main() {
    return ( 
        <div className="main" onScroll={(e: UIEvent<HTMLDivElement>) => {
            console.log(e.currentTarget.scrollTop);
        }} onClick={() => {
            console.log("text");
            
        }} >
            <MainBaner />
            <Slider />
            <TSport />
        </div>
     );
}

export default Main;