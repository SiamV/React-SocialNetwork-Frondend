import React from "react";
import classes from './FormsSpecialControl.module.css'


export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    console.log(meta)
    return (
        <div className={hasError ? classes.error : ''}>
            <div><textarea {...input} {...props} /></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    return (
        <div>
            <input {...input} {...props} />
        </div>
    )
}