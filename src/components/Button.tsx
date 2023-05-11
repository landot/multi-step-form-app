import './Button.css';

export function Button(props: {type: string, message: string, onClick: () => void}) {
    return (
        <button onClick={props.onClick} className={`button ${props.type}`}>{props.message}</button>
    )
}