import { useState } from 'react';
import { CheckOutSection } from './components/CheckOutSection';
import { PersonalInfoSection } from './components/PersonalInfoSection'
import { PickAddOnSection } from './components/PickAddOnSection';
import { SelectYourPlanSection } from './components/SelectYourPlanSection';
import { ThankYou } from './components/ThankYou';
import './App.css'

export interface PersonalInfoData {
  name: string;
  email: string;
  phone: string;
}

export interface Plan {
  name: string;
  paymentType: 'monthly' | 'yearly';
}

export interface Data {
  personalInfo?: PersonalInfoData;
  plan?: Plan;
  addOns?: string[];
}

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Data>();

  function handleStep(increment: number) {
    setStep(prevStep => prevStep + increment);
  }

  switch(step) {
    case 1:
      return (
        <>
          <PersonalInfoSection handleStep={handleStep} handleUpdate={setFormData} currentPersonalInfo={formData?.personalInfo}/>
        </>
      )
    case 2:
      return (
        <>
          <SelectYourPlanSection handleStep={handleStep} handleUpdate={setFormData} currentPlan={formData?.plan}/>
        </>
      )
    case 3:
      return (
        <>
          <PickAddOnSection handleStep={handleStep} handleUpdate={setFormData} currentAddOns={formData?.addOns}  paymentType={formData?.plan?.paymentType}/>
        </>
      )
    case 4:
      return (
        <>
          <CheckOutSection handleStep={handleStep} handleUpdate={setFormData} formData={formData}/>
        </>
      )
    case 5:
      return (
        <>
          <ThankYou />
        </>
      )
    default:
      return (
        <>
          <PersonalInfoSection handleStep={handleStep} handleUpdate={setFormData} currentPersonalInfo={formData?.personalInfo}/>
        </>
      )
  }
}

export default App
