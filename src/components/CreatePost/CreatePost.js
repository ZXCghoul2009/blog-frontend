import AuthContext from "../../store/auth-context";
import {Link} from "react-router-dom";
import Loader from "../UI/Loader/Loader";
import { useState, useCallback, useMemo, useContext,useRef } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SimpleMDE from "react-simplemde-editor";
import styles from "./CreatePost.module.css"
import "easymde/dist/easymde.min.css";


export const CreatePost = () => {
    const authCtx = useContext(AuthContext)
    const isLoggedIn = authCtx.isLoggedIn
    const [isLoading, setIsLoading] = useState(false);


    const imageUrl = "";
    const [value, setValue] = useState("");

    const handleChangeFile = () => {};

    const onClickRemoveImage = () => {};

    const onChange = useCallback((value) => {
        setValue(value);
    }, []);

    const options = useMemo(
        () => ({
            spellChecker: false,
            maxHeight: "400px",
            autofocus: true,
            placeholder: "Введите текст...",
            status: false,
            autosave: {
                enabled: true,
                delay: 1000,
            },
        }),
        []
    );


 return (
        <Paper style={{ padding: 30 }}>
            <Button variant="outlined" size="large">
                Загрузить превью
            </Button>
            <input type="file" onChange={handleChangeFile} hidden />
            {imageUrl && (
                <Button variant="contained" color="error" onClick={onClickRemoveImage}>
                    Удалить
                </Button>
            )}
            {imageUrl && (
                <img
                    className={styles.image}
                    src={`http://localhost:4444${imageUrl}`}
                    alt="Uploaded"
                />
            )}
            <br />
            <br />
            <TextField
                classes={{ root: styles.title }}
                variant="standard"
                placeholder="Заголовок статьи..."
                fullWidth
            />
            <TextField
                classes={{ root: styles.tags }}
                variant="standard"
                placeholder="Тема"
                fullWidth
            />
            <SimpleMDE
                className={styles.editor}
                value={value}
                onChange={onChange}
                options={options}
            />
            <div className={styles.buttons}>
                <Button size="large" variant="contained">
                    Опубликовать
                </Button>
                <a href="/">
                    <Button size="large">Отмена</Button>
                </a>
            </div>
        </Paper>
    );
}