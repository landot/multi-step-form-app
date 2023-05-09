import './TextInput.css';

export function TextInput(props: {fieldName: string, placeholder: string, error: string, value: string, handleInputChange: (e) => void}) {
    return (
        <div className={`text-input${props.error ? ' error' : ''}`}>
            <div className='text-input-header'>
                <p>{props.fieldName}</p>
                {props.error && 
                    <p className='validation-error'>{props.error}</p>
                }
            </div>
            <input
                type="text" 
                placeholder={props.placeholder} 
                value={props.value}
                onChange={props.handleInputChange}>
            </input>
        </div>
    )
}