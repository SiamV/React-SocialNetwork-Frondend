import {addPost, onWritePost} from "../../../redux/profilePageReducer";
import NewPostAdd from "./NewPostAdd";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newPostAdd: state.profilePage.newPostAdd
    }
}

const NewPostAddContainer = connect(mapStateToProps, {
    addPost,
    onWritePost
})(NewPostAdd);


export default NewPostAddContainer;