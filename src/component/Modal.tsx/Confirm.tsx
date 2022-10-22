import "./modal.scss"
import { CSSProperties, useEffect } from 'react';
import { IPole } from "../../store/models";
import { useAppSelector } from "../../store/hook";

interface IConfirmModalPropType {
    show: boolean;
    close: () => void,
    pole: IPole
    idTime: number;
    dateBook: Date | null;
    del: {
        bookId: number;
        userId: number;
    }
}

function ConfirmModal({
    show,
    close,
    pole,
    idTime= 0,
    dateBook= new Date(),
    del
}:IConfirmModalPropType) {

    const { times } = useAppSelector(state => state.time)
    const { books } = useAppSelector(state => state.book)
    const { user } = useAppSelector(state => state.user)
    const style:{
        show: CSSProperties;
        hide: CSSProperties;} = {
            show: {
                visibility: 'visible',
                opacity: 1
            },
            hide: {
                visibility: 'hidden',
                opacity: 0
            }
        }
    useEffect(() => {
        return () => {
        }
    })

    async function checkBooked(){

    }
    

    return ( 
        <div className="container">
            <div className="popup" id="popup" style={show? style.show : style.hide}>
                <div className="popup-inner">
                <div className="popup__photo">
                    <img src={"http://localhost:3000/photos/get/" + pole.photos[0]?.url} alt="" />
                </div>
                <div className="popup__text">
                    <h1>Забронировать поле </h1>
                    <p>
                        {
                            idTime? times.find(times => times.idTime == idTime)?.timeName :
                            "Занято"
                        }
                    </p>
                    {
                        !idTime && del.userId == user.id ? <button className={"button"} onClick={async() => {
                            const res = await fetch("http://localhost:3000/book/" + del.bookId, {
                                method: "DELETE",
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                            close()
                            close()
                        }}>Отменить бронирование</button>: ""
                    }
                    {
                        !!idTime && <button className={"button"} onClick={async() => {
                            const form = {
                                done: false,
                                time: idTime,
                                pole: pole.idPole,
                                dateBook: dateBook,
                                userName: user.username,
                            };
    
                            const res = await fetch("http://localhost:3000/book", {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(form)
                            })
                            close()
                        }}>Бронировать</button>
                    }
                </div>
                <a className="popup__close" href="#" onClick={close}>X</a>
                </div>
            </div>
        </div>
     );
}

export default ConfirmModal;