import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"

const MyPosts = () => {

    let myPostsData = [
        {id: 1, post: 'Назовем эту рубрику «Магия CSS». Думаю, это точно описывает то, о чем я буду' +
                ' рассказывать. Освоив эту магию тебя уже не будут пугать макеты дизайнеров, которые решили поддаться' +
                ' своей фантазии, ты сможешь воплотить все что угодно. Эта статья будет посвящена тому, как создать' +
                ' нестандартное обтекание текста. Узнаешь о некоторых свойствах CSS, которые наверняка редко используешь' +
                ' в работе.', like: 150},
        {id: 2, post: 'Эта функция — компонент, потому что она получает данные в одном объекте («пропсы») в' +
                ' качестве параметра и возвращает React-элемент. Мы будем называть такие компоненты «функциональными»,' +
                ' так как они буквально являются функциями.', like: 200 },
        {id: 3, post: 'Компоненты могут ссылаться на другие компоненты в возвращённом ими дереве. Это' +
                ' позволяет нам использовать одну и ту же абстракцию — компоненты — на любом уровне нашего приложения.' +
                ' Неважно, пишем ли мы кнопку, форму или целый экран: все они, как правило, представляют собой' +
                ' компоненты в React-приложениях.', like: 120}
    ]

    return (
        <div className={classes.MyPosts}>
            <h3>New my post:</h3>
            <textarea>Text</textarea>
            <div>
                <button>Add</button>
                <button>Delete</button>
            </div>
            <div className={classes.divPosts}>
            <Post description={myPostsData[0].post} like={myPostsData[0].like} />
            <Post description={myPostsData[1].post} like={myPostsData[1].like} />
            <Post description={myPostsData[2].post} like={myPostsData[2].like} />
            </div>
        </div>
    )
}

export default MyPosts;