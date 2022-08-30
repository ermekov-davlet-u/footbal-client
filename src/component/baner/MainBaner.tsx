import * as React from 'react';
import classes from "./Baner.module.scss"

function MainBaner() {
    return ( 
        <div className={ classes.baner } >
            <div className={classes.baner_bg}>
                <img src="/images/soccer.jpg" alt="" className={classes.baner_bg_img} />
            </div>
            <div className={classes.container}>
                <div className={classes.baner_content}>
                    <h1 className={classes.baner_title}>
                        Human-centered 
                        digital 
                        products & 
                        experiences
                    </h1>
                    <div className={classes.baner_text_wrap}>
                        <p className={classes.baner_text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique molestiae perspiciatis necessitatibus minus. Sed hic nobis, 
                            ipsum eos pariatur eveniet quae molestias odio, aspernatur sapiente laboriosam inventore placeat laudantium. Corporis, molestias 
                            maxime voluptatibus et temporibus rerum earum laudantium dignissimos quo consequatur cum in molestiae reiciendis quia optio delectus 
                            reprehenderit inventore, magnam debitis distinctio animi corrupti blanditiis 
                            laborum vitae. Maxime iusto in nesciunt sequi molestias maiores iure molestiae ea provident, repellat et nihil doloremque natus porro corporis?
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default MainBaner;