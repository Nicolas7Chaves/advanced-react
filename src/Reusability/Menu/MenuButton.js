import '../styles.scss'
import Button from '../Button/Button'

export default function MenuButton({ onClick, children }) {

    return (
        <>
            <Button onClick={onClick}>{children}</Button>
        </>
    )
}
