import React from "react";
import classes from './Paginator.module.css'


const Paginator = (props) => {
    let countPage = Math.ceil(props.totalCountUsers / props.countUsersPage);
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i);
    }
    return (
        <div className={classes.pagination}>
            {pages.map(p => {
                return <span key={p.id} onClick={(e) => {
                    props.onPageChange(p)
                }}
                             className={props.currentPage === p ? classes.current : classes.othersNumbers}>{p}</span>
            })}
        </div>
    )
}

export default Paginator;



