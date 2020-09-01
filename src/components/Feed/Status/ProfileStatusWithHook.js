import React, {useEffect, useState} from "react";
import classes from "./ProfileStatus.module.css"

export const ProfileStatusWithHook = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [statusLocal, setStatusLocal] = useState(props.status);

    useEffect(() => {
        setStatusLocal(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(statusLocal);
    }

    const onChangeStatusLocal = (e) => {
        setStatusLocal(e.currentTarget.value)
    }

    return (
        <div className={classes.statusBlock}>
            {(!editMode) &&
            <div><span
                onDoubleClick={activateEditMode}>{props.status === '' || props.status === null ? 'dont have status'
                : props.status}</span></div>}
            {(editMode) &&
            <div><input onChange={onChangeStatusLocal} value={statusLocal}
                        onBlur={deactivateEditMode} placeholder={'create new status'} /></div>}
        </div>
    )
}

export default ProfileStatusWithHook;