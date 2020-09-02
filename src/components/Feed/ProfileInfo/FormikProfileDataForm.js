import React from "react";
import {useFormik} from 'formik';

const FormikProfileDataForm = (props) => {
    const formik = useFormik({
        initialValues: {
            fullName: props.profile.fullName,
            aboutMe: props.profile.aboutMe,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            contacts: props.profile.contacts
        },
        onSubmit: values => {
            props.editProfileInfo(values);
            props.setEditMode(false);
            console.log(values);
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <button type="submit">Save</button>
            <div><b>Name</b>: <input
                id="fullName"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fullName}
            /></div>

            <div><b>About me</b>: <textarea
                id="aboutMe"
                name="aboutMe"
                onChange={formik.handleChange}
                value={formik.values.aboutMe}
            /></div>

            <div><b>My stack</b>: <textarea
                id="lookingForAJobDescription"
                name="lookingForAJobDescription"
                onChange={formik.handleChange}
                value={formik.values.lookingForAJobDescription}
            /></div>

            {/*<div><b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {*/}
            {/*    return <div key={key}> {key}: <input*/}
            {/*        id={key}*/}
            {/*        name="contacts+{key}"*/}
            {/*        type="text"*/}
            {/*        placeholder={key}*/}
            {/*        onChange={formik.handleChange}*/}
            {/*        value={formik.values.contacts}*/}
            {/*    />*/}
            {/*    </div>*/}
            {/*})}*/}
            {/*</div>*/}
        </form>
    );
}
export default FormikProfileDataForm;