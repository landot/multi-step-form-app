import { useState } from "react";
import { PlanCard } from "./PlanCard";
import { Section } from "./Section";
import arcadeImg from '../assets/images/icon-arcade.svg';
import advancedImg from '../assets/images/icon-advanced.svg';
import proImg from '../assets/images/icon-pro.svg';
import { BillingSlider } from "./BillingSlider";
import { Button } from "./Button";
import { Plan } from "../App";
import { plans } from "../assets/plans";
import './SelectYourPlanSection.css';


export function SelectYourPlanSection(
    props: {
        handleStep: (num: number) => void,
        handleUpdate: (obj: object) => void,
        currentPlan?: Plan
    }) {
    const [selectedPlan, setSelectedPlan] = useState<Plan>({
        name: props.currentPlan?.name || 'Arcade',
        paymentType: props.currentPlan?.paymentType || 'monthly',
    });

    function handleNextClick() {
        props.handleUpdate((prev: any) => ({
            ...prev, 
            plan: selectedPlan
        }))
        props.handleStep(1);
    }

    function handlePreviousClick() {
        props.handleStep(-1);
    }

    function getImgSrc(planName: string): string {
        switch(planName) {
            case 'Advanced':
                return advancedImg;
            case 'Pro':
                return proImg;
            default:
                return arcadeImg;
        }
    }

    function handlePlanChange(plan: string) {
        setSelectedPlan(prev => ({
            ...prev,
            name: plan
        }))
    }

    function handlePaymentChange() {
        setSelectedPlan(prev => ({
            ...prev,
            paymentType: prev.paymentType === 'monthly' ? 'yearly': 'monthly'
        }))
    }

    return (
        <>
            <Section 
                sectionTitle='Select your plan' 
                description='You have the option of monthly or yearly billing.'
                step={2}
            >
                <div className='select-plan'>
                    <div className="plan-card-container">
                        {plans.map(plan => {
                            return (
                                <PlanCard 
                                    selected={plan.name === selectedPlan.name} 
                                    imgUrl={getImgSrc(plan.name)} 
                                    imgAlt={`${plan.name} image`} 
                                    plan={plan.name} 
                                    billingType={selectedPlan.paymentType} 
                                    monthlyCost={plan.monthlyCost} 
                                    annualCost={plan.annualCost} 
                                    onClick={() => handlePlanChange(plan.name)}
                                />
                            )
                        })}
                    </div>
                    <BillingSlider 
                        paymentType={selectedPlan.paymentType} 
                        handleClick={handlePaymentChange}
                    />
                    <div className='navigation-button-desktop'>
                        <Button type='next' message='Next Step' onClick={handleNextClick}/>
                        <Button type='back' message='Back' onClick={handlePreviousClick}/>
                    </div>
                </div>
            </Section>
            <div className='navigation-button-mobile'>
                <Button type='next' message='Next Step' onClick={handleNextClick}/>
                <Button type='back' message='Back' onClick={handlePreviousClick}/>
            </div>
        </>
    )
}