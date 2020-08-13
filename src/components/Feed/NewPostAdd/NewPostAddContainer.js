import {addPost} from "../../../redux/profilePageReducer";
import NewPostAdd from "./NewPostAdd";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newPostAdd: state.profilePage.newPostAdd
    }
}

const NewPostAddContainer = connect(mapStateToProps, {
    addPost
})(NewPostAdd);


export default NewPostAddContainer;