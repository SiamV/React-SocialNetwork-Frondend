import {addMessage, onChangeMessage} from "../../redux/messagesPageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withLoginRedirect} from "../HOC/withLoginRedirect";

const mapStateToProps = (state) => {
    return {
        userItemData: state.messagesPage.userItemData,
        messagesData: state.messagesPage.messagesData,
        updateMessage: state.messagesPage.updateMessage,
        isLogin: state.login.isLogin
    }
}
const LoginForm = withLoginRedirect(Messages);
const MessagesContainer = connect(mapStateToProps, {
    addMessage,
    onChangeMessage}) (LoginForm);
export default MessagesContainer;