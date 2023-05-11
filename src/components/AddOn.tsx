import { useState } from 'react';
import './AddOn.css';

export function AddOn(props: {
    name: string,
    description: string,
    billingType: 'monthly' | 'yearly',
    monthlyCost: number, 
    annualCost: number
}) {
    const [selected, setSelected] = useState(false);

    function handleSelected() {
        setSelected(prev => !prev)
    }

    return (
        <div className={`add-on ${props.name} ${selected ? ' selected': ''}`}>
            <div className='add-on-left-section'>
                <input 
                    className='add-on-checkbox' 
                    type="checkbox" 
                    checked={selected}
                    onClick={handleSelected}
                />
                <div className='add-on-description'>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
            {props.billingType === 'monthly' ? (
                    <p className='add-on-cost'>+${props.monthlyCost}/mo</p>
                ): (
                    <p className='add-on-cost'>+${props.annualCost}/yr</p>
                )}
        </div>
    )
}