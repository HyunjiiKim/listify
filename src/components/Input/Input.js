const InputText = (inputType,icon,PlaceHolder) => {
    const iconPath = `../../icons/${icon}.png`

    return(
        <input type={inputType}
        placeholder={`${iconPath} ${PlaceHolder}`}
        style={{
            width: '323px',
            height: '60px',
            borderRadius: '12px',
            backgroundColor: 'rgba(240,240,240,0.8)',
            Color: '#0B0A0A',
            fontSize:'16pt'
        }}/>
    );
};

export default InputText;