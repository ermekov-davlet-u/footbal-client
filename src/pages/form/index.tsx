
import { Outlet } from 'react-router-dom';


function Adding() {

    return ( 
        <>
            <div className="fon"></div>
            <div className="form">
                <div className="form_container">
                    <Outlet/>
                </div>
            </div>
        </>
     );
}

export default Adding;