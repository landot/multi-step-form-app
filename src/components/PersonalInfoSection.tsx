import { useState } from 'react';
import { TextInput } from './TextInput';
import { Section } from './Section';
import './PersonalInfoSection.css';
import { Button } from './Button';

interface ValidationError {
    field: string;
    message: string;
}

export function PersonalInfoSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState<ValidationError[]>([]);

    function handleNextClick() {
        validate();
        if(errors.length > 0) {
            console.log('errors happened')
        } else {
            console.log('looks good')
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
        
        setErrors(validationErrors);
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
        <Section 
            sectionTitle='Personal info' 
            description='Please provide your name, email address, and phone number.'
        >
            <div className='personal-info'>
                <TextInput fieldName='Name' placeholder='e.g. Stephen King' error={getErrorsFor('name')} value={name} handleInputChange={(e) => setName(e.target.value)}/>
                <TextInput fieldName='Email' placeholder='e.g. stephenking@lorem.com' error={getErrorsFor('email')} value={email} handleInputChange={(e) => setEmail(e.target.value)}/>
                <TextInput fieldName='Phone' placeholder='e.g. +1 234 567 890' error={getErrorsFor('phone')} value={phone} handleInputChange={(e) => setPhone(e.target.value)}/>
                <div className='navigation-button'>
                    <Button onClick={handleNextClick} type='back' message='Back'/>
                    <Button onClick={handleNextClick} type='next' message='Next Step'/>
                </div>
            </div>
        </Section>
    )
}