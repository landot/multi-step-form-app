import { useState } from 'react';
import './BillingSlider.css';

export function BillingSlider() {
    const [paymentType, setPaymentType] = useState<'monthly' | 'annual'>('monthly');

    function handleToggle() {
        setPaymentType(prev => {
            if(prev === 'monthly') {
                return 'annual'
            } else {
                return 'monthly'
            }
        })
    }

    return (
        <div className='slider-container'>
            <p className={paymentType === 'monthly' ? 'active': ''}>Monthly</p>
            <label className="switch">
                 <input 
                    type="checkbox" 
                    checked={paymentType === 'annual'}
                    onChange={() => null}
                />
                <span className="slider round" onClick={handleToggle}></span>
            </label>
            <p className={paymentType === 'annual' ? 'active': ''}>Yearly</p>
        </div>
    )
}
