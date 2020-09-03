import {addMessage} from "../../redux/messagesPageReducer";
import {connect} from "react-redux";
import {withLoginRedirect} from "../HOC/withLoginRedirect";
import MessagesWithReduxForm from "./MessagesWithReduxForm";
import {getMessagesData, getUserItemData} from "../../redux/messagesSelectors";
import {getIsLoginSelector} from "../../redux/loginSelectors";

const mapStateToProps = (state) => {
    return {
        userItemData: getUserItemData(state),
        messagesData: getMessagesData(state),
        isLogin: getIsLoginSelector(state)
    }
}
const LoginForm = withLoginRedirect(MessagesWithReduxForm);
const MessagesContainer = connect(mapStateToProps, {
    addMessage}) (LoginForm);
export default MessagesContainer;