import { FiDelete } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
export default function Student(props) {
    const {student,handle_delete}=props
    return (
        <div className="student">
            <span>{student.name}</span>
            <AiOutlineEdit />
            <FiDelete onClick={() => handle_delete(student.id)} />
        </div>
    );
}
