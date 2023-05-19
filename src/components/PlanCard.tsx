import './PlanCard.css';

export function PlanCard(
    props: {
        selected: boolean,
        imgUrl: string, 
        imgAlt: string, 
        plan: string,
        billingType: 'monthly' | 'yearly',
        monthlyCost: number, 
        annualCost: number,
        onClick: (plan: string) => void
    }) {
    return (
        <div 
            className={`plan ${props.plan}${props.selected ? ' selected': ''}`}
            onClick={() => props.onClick(props.plan)}    
        >
            <img src={props.imgUrl} alt={props.imgAlt} />
            <div className='plan-details'>
                <h2>{props.plan}</h2>
                {props.billingType === 'monthly' ? (
                    <p className='cost'>${props.monthlyCost}/mo</p>
                ): (
                    <>
                        <p className='cost'>${props.annualCost}/yr</p>
                        <p className='promotion'>2 months free</p>
                    </>
                )}
            </div>
        </div>
    )
}