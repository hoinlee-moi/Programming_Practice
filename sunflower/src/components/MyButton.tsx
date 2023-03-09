import React from "react"
import { MyButtonProps } from "../etc/TypeColletion"

const MyButton = ({onClick,children,className,id}:MyButtonProps) => {
    return <button id={id&&id} onClick={onClick} className={className?className:""}>{children}</button>
}

export default React.memo(MyButton)