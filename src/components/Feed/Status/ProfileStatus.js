import React from "react";
import classes from "./ProfileStatus.module.css"

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        statusLocal: this.props.status
    }

    activateEditMode = () => {
        this.setState(
            {editMode: true}
        )
    }

    deactivateEditMode = () => {
        this.setState(
            {editMode: false}
        );
        this.props.updateStatus(this.state.statusLocal);
    }

    onChangeStatusLocal = (e) => {
        this.setState(
            {statusLocal: e.currentTarget.value}
        )
    }

    render() {
        return (
            <div className={classes.statusBlock}>
                <span>My status: </span>
                {(!this.state.editMode) &&
                <div><span onDoubleClick={this.activateEditMode}>{this.props.status === '' || this.props.status === null ? 'dont have status'
                    : this.props.status}</span></div>}
                {(this.state.editMode) &&
                <div><input onChange={this.onChangeStatusLocal} value={this.state.statusLocal}
                            onBlur={this.deactivateEditMode} placeholder={'create new status'}/></div>}
            </div>
        )
    }
}

export default ProfileStatus;