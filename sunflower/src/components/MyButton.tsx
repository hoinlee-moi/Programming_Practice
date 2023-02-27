import React from "react"
import { MyButtonProps } from "../etc/TypeColletion"

const MyButton = ({onClick,children,className}:MyButtonProps) => {
    return <button onClick={onClick} className={className?className:""}>{children}</button>
}

export default MyButton