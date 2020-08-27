import React, {useState} from "react";
import classes from './Paginator.module.css'


const Paginator = ({portionSize = 15, ...props}) => {
    let countPage = Math.ceil(props.totalCountUsers / props.countUsersPage);
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(countPage / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (
        <div className={classes.pagination}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }} >{'PREV'}</button> }

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span key={p.id} onClick={(e) => {
                        props.onPageChange(p)
                    }}
                                 className={props.currentPage === p ? classes.current : classes.othersNumbers}>{p}</span>
                })}

            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }} >{'NEXT'}</button> }
        </div>
    )
}

export default Paginator;



