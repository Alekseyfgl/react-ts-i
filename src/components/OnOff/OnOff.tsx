type OnOffPropsType = {
    status: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    const {status} = props

    return (
        <div>

            <div style={{backgroundColor: status ? 'green' : 'white'}}>on</div>
            <div style={{backgroundColor: status ? 'white' : 'red'}}>off</div>
            <div style={{
                borderRadius: '50%',
                height: '20px',
                width: '20px',
                backgroundColor: status ? 'green' : 'red'
            }}></div>
        </div>
    );
}