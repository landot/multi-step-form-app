import './ProgressBanner.css';

const sections = [
    'YOUR INFO',
    'SELECT PLAN',
    'ADD-ONS',
    'SUMMARY'
]

export function ProgressBanner(props: {step: number}) {
    return (
        <div className='progress-banner'>
            <div className='banner-wrapper'>
                {sections.map((section, index) => {
                    return (
                        <div className={`progress-banner-section ${section}${props.step === index + 1 ? ' selected': ''}`}>
                            <div className='section-number'>
                                <p>{index + 1}</p>
                            </div>
                            <div className='section-description'>
                                <p className='section-step'>STEP {index + 1}</p>
                                <p className='section-name'>{section}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}