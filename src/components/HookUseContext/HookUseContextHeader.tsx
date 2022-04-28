const HookUseContextHeader : any = ( {isDark} : any ) => {
    return (
        <header className="header" 
        style={
            {backgroundColor : isDark ? 'black' : 'lightgray', 
            color: isDark ? 'white' : 'black'
            }}>
            <h1>Welcome 아저씨!</h1>
        </header>
    );
}

export default  HookUseContextHeader;