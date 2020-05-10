import s from "../ProfileInfo/ProfileInfo.module.sass";
import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div className={s.profileInfo}>
                        <span>Статус: </span><span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={s.profileInfo}>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;