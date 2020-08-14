import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../common/validators/validators";
import {Textarea} from "../../common/FormsSpecialControl/FormsSpecialControl";

const maxLength100 = maxLengthCreator(100);

const FormAddPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'textarea'} component={Textarea} placeholder={'new post...'}
                   validate={[requiredField, maxLength100]}
            />
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const ReduxFormAddPost = reduxForm({form: 'addPostForm'})(FormAddPost)

export default ReduxFormAddPost;