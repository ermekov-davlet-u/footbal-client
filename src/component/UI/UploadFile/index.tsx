import { DragEvent, useState } from "react";
import classes from "./File.module.scss"

function UploadFile() {

    const [drag, setDrag] = useState<boolean>(false);

    function dragHundler(e: DragEvent) {
        e.preventDefault();
        e.stopPropagation();
        setDrag(true)
    }

    function dragLeave(e: DragEvent) {
        const typeFile = ["image/png", "image/jpeg", "image/jpg"]
        e.preventDefault();
        e.stopPropagation();
        setDrag(false)
        if(typeFile.includes(e.dataTransfer.files[0].type)){
            console.log("test");
        }
        console.log(e.dataTransfer.files[0])
    }

    return ( 
        <div className={classes.uploader}>
            {
                !drag ? <div className={classes.title}
                onDragStart={(e: DragEvent) => dragHundler(e)}
                onDragLeave={(e: DragEvent) => dragLeave(e)}
                onDragOver={(e: DragEvent) => dragHundler(e)}
                onDrop={(e: DragEvent) => dragLeave(e)}>
                Перетащите файл для загрузки
            </div>: <div className={classes.fileWrap}
                onDragStart={(e: DragEvent) => dragHundler(e)}
                onDragLeave={(e: DragEvent) => dragLeave(e)}
                onDragOver={(e: DragEvent) => dragHundler(e)}
                onDrop={(e: DragEvent) => dragLeave(e)}>
                Отпустите файл для загрузки
            </div>
            }
        </div>
     );
}

export default UploadFile;