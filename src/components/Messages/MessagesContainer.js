import {addMessage, onChangeMessage} from "../../redux/messagesPageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        userItemData: state.messagesPage.userItemData,
        messagesData: state.messagesPage.messagesData,
        updateMessage: state.messagesPage.updateMessage
    }
}

const MessagesContainer = connect(mapStateToProps, {
    addMessage,
    onChangeMessage}) (Messages);

export default MessagesContainer;

//const mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: (text) => {
//             dispatch(addMyMessageActionCreator(text));
//         },
//         onChangeMessage: (text) => {
//            dispatch(updateNewMessageActionCreator(text));
//         }
//     }
// }