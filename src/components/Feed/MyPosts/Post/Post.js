import React from "react";
import classes from "./Post.module.css"

const Post = () => {
    return (
        <div className={classes.post}>
            <img src={require('../../../../drawable/aveoAzul.jpg')} alt={'avatar'}/>
            <p>Назовем эту рубрику «Магия CSS». Думаю, это точно описывает то, о чем я буду рассказывать. Освоив эту магию тебя уже не будут пугать макеты дизайнеров, которые решили поддаться своей фантазии, ты сможешь воплотить все что угодно. Эта статья будет посвящена тому, как создать нестандартное обтекание текста. Узнаешь о некоторых свойствах CSS, которые наверняка редко используешь в работе.</p>
            <div>
            <span>like</span>
            </div>
        </div>
    )
}

export default Post;