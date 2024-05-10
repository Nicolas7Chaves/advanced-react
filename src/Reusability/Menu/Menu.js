import { useState } from 'react'
import '../styles.scss'

export default function Menu({ children }) {
    const [open, setOpen] = useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }
    return (
        <div className='menu'>
            {children}
        </div>
    )
}