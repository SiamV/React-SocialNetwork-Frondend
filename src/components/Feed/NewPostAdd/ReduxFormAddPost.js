import React from "react";
import {Field, reduxForm} from "redux-form";

const FormAddPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'textarea'} component={'textarea'} placeholder={'new post...'}/>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const ReduxFormAddPost = reduxForm ({form:'addPostForm'}) (FormAddPost)

export default ReduxFormAddPost;