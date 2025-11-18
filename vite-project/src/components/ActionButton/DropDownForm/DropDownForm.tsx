import React, { useState, type ChangeEvent, type FC } from "react";
import { FiX } from "react-icons/fi";
import { useTypedDispatch } from "../../../hooks/redux";

type TDropDownFormProps = {
    boardId: string;
    listId: string;
    setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    list?: boolean;
}

const DropDownForm: FC<TDropDownFormProps> = ({
    boardId,
    listId,
    setIsFormOpen,
    list
}) => {
    const dispatch = useTypedDispatch();
    const [text, setText] = useState('');
    const formPlaceholder = list ?
    "리스트의 제목을 입력하세요.":
    "일의 제목을 입력하세요."

    const buttonTitle = list ?
    "리스트 추가하기":
    "일 추가하기"

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    const handleButtonClick = () => {
        if(text) {
            if(list) {
                dispatch()
            }else {

            }
        }
    }

    return (
        <div>
            <textarea
            value={text}
            onChange={handleTextChange}
            autoFocus
            placeholder="formPlaceholder"
            onBlur={() => setIsFormOpen(false)}
            />
            <div>
                <button onMouseDown={}>
                    {buttonTitle}
                </button>
                <FiX />
            </div>    
        </div>
    )
}

export default DropDownForm;