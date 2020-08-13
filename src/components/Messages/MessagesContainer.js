import {addMessage} from "../../redux/messagesPageReducer";
import {connect} from "react-redux";
import {withLoginRedirect} from "../HOC/withLoginRedirect";
import MessagesWithReduxForm from "./MessagesWithReduxForm";

const mapStateToProps = (state) => {
    return {
        userItemData: state.messagesPage.userItemData,
        messagesData: state.messagesPage.messagesData,
        updateMessage: state.messagesPage.updateMessage,
        isLogin: state.login.isLogin
    }
}
const LoginForm = withLoginRedirect(MessagesWithReduxForm);
const MessagesContainer = connect(mapStateToProps, {
    addMessage}) (LoginForm);
export default MessagesContainer;