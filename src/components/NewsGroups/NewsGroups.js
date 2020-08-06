import React from "react";
import classes from './NewsGroups.module.css';
import NewsGroupsPosts from "./NewsGroupsItem/NewsGroupsPosts";
import {Redirect} from "react-router-dom";

const NewsGroups = (props) => {
    if(!props.isLogin) {return <Redirect to={'/login'} />}

    let onClickAddPostGroup = () => {
        props.addPost();
    }

    let onChangeTextAreaPosts = (event) => {
        let body = event.target.value;
        props.updateNewPost(body);
    }

    let messagesElements = props.postsGroups.map(m => (
        <NewsGroupsPosts message={m.post} key={m.id}/>
    ))

    return (
        <div className={classes.NewsGroups}>
            <textarea
                value={props.messageData}
                onChange={onChangeTextAreaPosts}
                placeholder={'write group`s post...'}
                cols="30" rows="10" />
            <button onClick={onClickAddPostGroup}>Add post</button>

            <div className={classes.NewsGroupsFielder}>{messagesElements}</div>
        </div>
    )
}
export default NewsGroups;





// import React from "react";
// import classes from './NewsGroups.module.css';
// import {addPostGroupCreator, updateNewLetterCreator} from "../../redux/newsGroupsPageReducer";
// import NewsGroupsPosts from "./NewsGroupsItem/NewsGroupsPosts";
//
// const NewsGroups = (props) => {
//
//     let onClickAddPostGroup = () => {
//         props.dispatch(addPostGroupCreator());
//     }
//
//     let onChangeTextAreaPosts = (event) => {
//         let body = event.target.value;
//         props.dispatch(updateNewLetterCreator(body));
//     }
//
//     let messagesElements = props.postsGroups.map(m => (
//         <NewsGroupsPosts message={m.post} />
//     ))
//
//     return (
//         <div className={classes.NewsGroups}>
//             <textarea
//                 value={props.messageData}
//                 onChange={onChangeTextAreaPosts}
//                 placeholder={'write group`s post...'}
//                 cols="30" rows="10" />
//             <button onClick={onClickAddPostGroup}>Add post</button>
//
//             <div className={classes.NewsGroupsFielder}>{messagesElements}</div>
//         </div>
//     )
// }
// export default NewsGroups;