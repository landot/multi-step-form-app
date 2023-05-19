import { useState } from 'react';
import './AddOn.css';

export function AddOn(props: {
    name: string,
    description: string,
    paymentType: 'monthly' | 'yearly',
    monthlyCost: number, 
    annualCost: number,
    selected: boolean,
    setAddOns: (addOns: any) => void
}) {
    const [selected, setSelected] = useState(props.selected);

    function handleSelected() {
        setSelected(prev => !prev);
        selected 
            ? props.setAddOns((prev: string[]) => prev.filter((addOn: string) => addOn !== props.name))
            : props.setAddOns((prev: string[]) => [ ...prev, props.name ])
    }

    return (
        <div 
            className={`add-on${selected ? ' selected': ''}`}
            onClick={handleSelected}
        >
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
            {props.paymentType === 'monthly' ? (
                    <p className='add-on-cost'>+${props.monthlyCost}/mo</p>
                ): (
                    <p className='add-on-cost'>+${props.annualCost}/yr</p>
                )}
        </div>
    )
}