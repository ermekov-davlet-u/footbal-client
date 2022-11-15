import classes from "./PoleTimeBook.module.scss"
import { useAppSelector } from "../../../store/hook";


function PoleTimeBook() {

    const { times } = useAppSelector(state => state.time)
    const { books } = useAppSelector(state => state.book)

    return ( 
        <div className={classes.container}>
            <h3 className={classes.title}>
                STANDARD
            </h3>
            <p className={classes.desc}>
                Organize across all 
                apps by hand
            </p>
            <p className={classes.price}>
                <span className={classes.sum}>1000</span>
                <span className={classes.currency}>
                    сом
                </span>
            </p>
            <div className={classes.times}>
                {
                    times.map((time, i) => {
                        const a = books.find(b => {
                            return (new Date(b.dateBook).toLocaleDateString() == new Date().toLocaleDateString() && b.time.idTime == time.idTime)
                            }
                        )
                        return (
                            <div key={time.idTime} className="table_row" onClick={() => {
                                    console.log(time);
                                    
                                }}>
                                {
                                    time.timeName
                                }
                            </div>
                        )
                
                    })
                }
            </div>
        </div>
     );
}

export default PoleTimeBook;