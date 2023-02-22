
import { MyButtonProps } from "../../etc/TypeColletion"

const MyButton = ({onClick,children}:MyButtonProps) => {
    return <button onClick={onClick}>{children}</button>
}

export default MyButton