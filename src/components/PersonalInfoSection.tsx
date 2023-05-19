import { useState } from 'react';
import { TextInput } from './TextInput';
import { Section } from './Section';
import { Button } from './Button';
import { PersonalInfoData } from '../App';
import './PersonalInfoSection.css';

interface ValidationError {
    field: string;
    message: string;
}

export function PersonalInfoSection(
    props: {
        handleStep: (num: number) => void,
        handleUpdate: (obj: object) => void,
        currentPersonalInfo?: PersonalInfoData
    }
    
) {
    const [name, setName] = useState(props.currentPersonalInfo?.name || '');
    const [email, setEmail] = useState(props.currentPersonalInfo?.email || '');
    const [phone, setPhone] = useState(props.currentPersonalInfo?.phone || '');
    const [errors, setErrors] = useState<ValidationError[]>([]);

    function handleNextClick() {
        const validationErrors = validate();
        setErrors(validationErrors);
        if(validationErrors.length === 0) {
            props.handleUpdate((prev: any) => ({
                ...prev, 
                personalInfo: {
                    name: name,
                    email: email,
                    phone: phone
                }
            }))
            props.handleStep(1);
        }
    }

    function emailIsValid(email: string): boolean {
        const re = /^\S+@\S+\.\S+$/;
        return re.test(email);

    }

    function validate() {
        // check for empty values
        const validationErrors: ValidationError[] = [];
        [{field: 'name', value: name}, {field: 'email', value: email}, {field: 'phone', value: phone}].forEach(({field, value}) => {
            isEmpty(value) ? 
            validationErrors.push({field: field, message: 'This field is required'})
            : null
        })
        // check for email correctness
        emailIsValid(email) ? null : validationErrors.push({field: 'email', message: 'email is invalid'});
        
        return validationErrors;
    }

    function isEmpty(value: string): boolean {
        return value === '';
    }

    function getErrorsFor(field: string): string {
        const error = errors.filter(error => {
            return error.field === field
        })
        return error[0] ? error[0].message: '';
    }

    return (
        <>
            <Section 
                sectionTitle='Personal info' 
                description='Please provide your name, email address, and phone number.'
                step={1}
            >
                <div className='personal-info'>
                    <TextInput fieldName='Name' placeholder='e.g. Stephen King' error={getErrorsFor('name')} value={name} handleInputChange={(e) => setName(e.target.value)}/>
                    <TextInput fieldName='Email' placeholder='e.g. stephenking@lorem.com' error={getErrorsFor('email')} value={email} handleInputChange={(e) => setEmail(e.target.value)}/>
                    <TextInput fieldName='Phone' placeholder='e.g. +1 234 567 890' error={getErrorsFor('phone')} value={phone} handleInputChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className='navigation-button-desktop'>
                    <Button type='next' message='Next Step' onClick={handleNextClick}/>
                </div>
            </Section>
            <div className='navigation-button-mobile'>
                <Button type='next' message='Next Step' onClick={handleNextClick}/>
            </div>
        </>
    )
}