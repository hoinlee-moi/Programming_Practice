'use client'

import { usePathname, useRouter } from "next/navigation"

export default function DetailLink() {
    let router = useRouter()
    let a = usePathname()
    return (
        <button onClick={()=>{router.push('/list')}}>버튼</button>
    )
}