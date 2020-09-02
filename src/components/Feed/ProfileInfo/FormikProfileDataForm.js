import React from "react";
import {useFormik} from 'formik';

const FormikProfileDataForm = (props) => {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            aboutMe: "",
            lookingForAJobDescription: ""
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.editProfileInfo(values);
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
        </form>
    );
}
export default FormikProfileDataForm;