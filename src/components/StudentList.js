import { useState } from "react";
import Student from "./Student";
import FormAdd from "./FormAdd";
export default function StudentList() {
    const [list, setList] = useState([
        {
            id: 1,
            name: "Lê Gia Mèo",
            isComplete: false,
        },
        {
            id: 2,
            name: "Lê Gia Gâu",
            isComplete: false,
        },
        {
            id: 3,
            name: "Lê Gia Heo",
            isComplete: false,
        },
    ]);
    const addList = (textName) => {
        setList([
            ...list,
            { id: list.length + 1, name: textName, isComplete: false },
        ]);
    };
    const handle_delete = (id) => {
        const newList = list.filter((stu) => stu.id !== id);
        setList(newList);
    };
    return (
        <div className="studentList">
            <FormAdd addList={addList} />
            {list.map((value, index) => {
                return <Student student={value} handle_delete={handle_delete} key={index}/>;
            })}
        </div>
    );
}
