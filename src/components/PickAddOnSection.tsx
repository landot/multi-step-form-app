import { AddOn } from "./AddOn";
import { Section } from "./Section";
import { useState } from "react";
import { Button } from "./Button";
import { addOnData } from "../assets/addOns";
import './PickAddOnSection.css';

export function PickAddOnSection(
    props: {
        handleStep: (num: number) => void,
        handleUpdate: (obj: object) => void,
        currentAddOns: string[],
        paymentType: 'monthly' | 'yearly'
    }) {
    const [addOns, setAddOns] = useState<string[]>(props.currentAddOns || []);

    function handleNextClick() {
        props.handleUpdate((prev: any) => ({
            ...prev, 
            addOns: addOns
        }))
        props.handleStep(1);
    }

    function handlePreviousClick() {
        props.handleStep(-1);
    }

    function handleAddOnClick(addOn: string) {
        setAddOns(prev => {
            if(prev.includes(addOn)) {
                return prev.filter(a => a !== addOn);
            } else {
                return [...prev, addOn];
            }
        });
    }

    return (
        <>
            <Section 
                sectionTitle='Pick add-ons' 
                description='Add-ons help enhance your gaming experience.'
                step={3}
            >
                <div className="add-on-section">
                    {addOnData.map(addOn => {
                        return (
                            <AddOn 
                                name={addOn.name} 
                                description={addOn.description} 
                                paymentType={props.paymentType} 
                                monthlyCost={addOn.monthlyCost} 
                                annualCost={addOn.annualCost} 
                                selected={addOns.includes(addOn.name)}
                                setAddOns={() => handleAddOnClick(addOn.name)}
                            />
                        )
                    })}
                </div>
                <div className='navigation-button-desktop'>
                    <Button type='next' message='Next Step' onClick={handleNextClick}/>
                    <Button type='back' message='Back' onClick={handlePreviousClick}/>
                </div>
            </Section>
            <div className='navigation-button-mobile'>
                <Button type='next' message='Next Step' onClick={handleNextClick}/>
                <Button type='back' message='Back' onClick={handlePreviousClick}/>
            </div>
        </>
    )
}