import './Section.css';

export function Section(props: {children: any, sectionTitle: string, description: string}) {
    return (
        <div className='section'>
            <div className='section-header'>
                <h1>{props.sectionTitle}</h1>
                <p>{props.description}</p>
            </div>
            {props.children}
        </div>
    )
}