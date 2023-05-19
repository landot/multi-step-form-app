import { Data } from '../App';
import { addOnData } from '../assets/addOns';
import { plans } from '../assets/plans';
import { Button } from './Button';
import { Section } from './Section';
import './CheckOutSection.css';

export function CheckOutSection(
    props: {
        handleStep: (num: number) => void,
        handleUpdate: (obj: object) => void,
        formData?: Data
    }) {
    
    function handleNextClick() {
        props.handleStep(1);
    }

    function handlePreviousClick() {
        props.handleStep(-1);
    }

    function handleChangePlan() {
        props.handleStep(-2);
    }

    function getPlanCost(): number {
        const plan = plans.filter(plan => plan.name === props.formData?.plan?.name)[0];
        return props.formData?.plan?.paymentType === 'monthly' ? plan.monthlyCost: plan.annualCost;
    }

    function getAddOnCost(addOn: string): number {
        const currentAddOn = addOnData.filter(a => {
            return a.name === addOn
        });
        return props.formData?.plan?.paymentType === 'monthly' ? currentAddOn[0].monthlyCost: currentAddOn[0].annualCost
    }

    function getShortenedPaymentString(): string {
        return props.formData?.plan?.paymentType === 'monthly'? 'mo': 'yr';
    }

    function getPaymentString(): string {
        return props.formData?.plan?.paymentType === 'monthly'? 'month': 'year';
    }

    function calculateTotal(): number {
        let total = 0;
        total += getPlanCost();
        props.formData?.addOns?.map(addOn => total += getAddOnCost(addOn));
        return total;
    }

    return (
        <>
            <Section 
                sectionTitle='Finishing up' 
                description='Double-check everything looks OK before confirming.'
                step={4}
            >
                <div className='check-out'>
                    <div className='check-out-plan-summary'>
                        <div className='check-out-plan'>
                            <div className='check-out-plan-left'>
                                <h2>{props.formData?.plan?.name} ({props.formData?.plan?.paymentType})</h2>
                                <button onClick={handleChangePlan}>Change</button>
                            </div>
                            <p>${getPlanCost()}/{getShortenedPaymentString()}</p>
                        </div>
                        <hr />
                        <div className='check-out-add-ons'>
                            {props.formData?.addOns?.map((addOn: string) => {
                                return (
                                    <div>
                                        <p className='check-out-add-on-name'>{addOn}</p>
                                        <p className='check-out-add-on-cost'>+${getAddOnCost(addOn)}/{getShortenedPaymentString()}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='check-out-total'>
                        <p className='check-out-total-text'>Total (per {getPaymentString()})</p>
                        <p className='check-out-total-cost'>+${calculateTotal()}/{getShortenedPaymentString()}</p>
                    </div>
                </div>
                <div className='navigation-button-desktop'>
                    <Button type='confirm' message='Confirm' onClick={handleNextClick}/>
                    <Button type='back' message='Back' onClick={handlePreviousClick}/>
                </div>
            </Section>
            <div className='navigation-button-mobile'>
                <Button type='confirm' message='Confirm' onClick={handleNextClick}/>
                <Button type='back' message='Back' onClick={handlePreviousClick}/>
            </div>
        </>
    )
}