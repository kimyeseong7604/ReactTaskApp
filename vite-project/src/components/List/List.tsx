import React, { type FC } from "react";
import { GrSubtract } from "react-icons/gr";
import Task from "../Task/Task";
import ActionButton from "../ActionButton/ActionButton";
import type { IList, ITask } from "../../types";
import { useTypedDispatch } from "../../hooks/redux";
import { deleteList, setModalActive } from "../../store/slices/boardsSlice";
import { addLog } from "../../store/slices/loggerSlice";
import { v4 } from "uuid";
import { setModalData } from "../../store/slices/modalSlice";

type TListProps = {
    list: IList;
    boardId: string;
}

const List: FC<TListProps> = ({
    list,
    boardId
}) => {

    const dispath = useTypedDispatch();


    const handleListDelete = (listId: string) => {
        dispath(deleteList({
            boardId,
            listId
        }))
        dispath(
            addLog({
            logId: v4(),
            logMessage: `리스트 삭제하기 : ${list.listName}`,
            logAuthor: 'User',
            logTimestamp: new Date().toISOString()
        }))
    }

    const hendleTaskChang = (boardId: string, listId: string, taskId: string, task: ITask) => {
        dispath(setModalData({
            boardId,
            listId,
            task
        }))
        dispath(setModalActive(true))
    }
    return (
        <div>
            <div>
                <div>{list.listName}</div>
                <GrSubtract 
                onClick={()=>handleListDelete(list.listId)}
                />
            </div>
            {list.tasks.map((task, index) =>(
                <div 
                onClick={()=>hendleTaskChang(boardId, list.listId, task.taskId, task)}
                key={task.taskId}
                >
                    <Task
                        taskName={task.taskName}
                        taskDescription={task.taskDescription}
                        boardId={boardId}
                        Id={task.taskId}
                        index={index}
                    />
                </div>
            ))}
            <ActionButton />
        </div>
    )

}

export default List;