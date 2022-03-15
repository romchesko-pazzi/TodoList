import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import {AddCircle} from "@mui/icons-material";
import s from "./AddForm.module.css"

type AddFormPropsType = {
    callback: (title: string) => void,
    name: string,
}

export const AddForm = (props: AddFormPropsType) => {
    const {callback} = props
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);


    const onClickHandler = () => {
        if (value.trim() !== "") {
            callback(value.trim());
            setValue("");
        }
        if (value === "") {
            setError(true);
        }
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onClickHandler()
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setValue(event.currentTarget.value);
    }

    return (
        <div className={s.main}>
            <TextField
                helperText={error && "Title is required"}
                error={error}
                label={"Title"}
                value={value}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}/>
            <div className={s.btn}>
            <IconButton>
                <AddCircle color={"primary"} onClick={onClickHandler}/>
            </IconButton>
            </div>
        </div>
    );
};
