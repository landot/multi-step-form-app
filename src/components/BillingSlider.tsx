import './BillingSlider.css';

export function BillingSlider(props: {paymentType: string, handleClick: () => void}) {
    return (
        <div className='slider-container'>
            <p className={props.paymentType === 'monthly' ? 'active': ''}>Monthly</p>
            <label className="switch">
                 <input 
                    type="checkbox" 
                    checked={props.paymentType === 'yearly'}
                    onChange={() => null}
                />
                <span className="slider round" onClick={props.handleClick}></span>
            </label>
            <p className={props.paymentType === 'yearly' ? 'active': ''}>Yearly</p>
        </div>
    )
}
