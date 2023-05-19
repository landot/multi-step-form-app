import checkMark from '../assets/images/icon-thank-you.svg';
import { Section } from './Section';
import './ThankYou.css';

export function ThankYou() {
    return (
        <Section step={4}>
            <div className='thank-you'>
                <img src={checkMark} alt="check mark" />
                <h1>Thank you!</h1>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </Section> 
    )
}
