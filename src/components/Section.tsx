import { ProgressBanner } from './ProgressBanner';
import './Section.css';

export function Section(props: {children: any, sectionTitle?: string, description?: string, step?: number}) {
    return (
        <div className='app'>
            {props.step && <ProgressBanner step={props.step}/>}
            <div className='section'>
                {(props.sectionTitle && props.description) && (
                    <div className='section-header'>
                        <h1>{props.sectionTitle}</h1>
                        <p>{props.description}</p>
                    </div>
                )}
                {props.children}
            </div>
        </div>
    )
}