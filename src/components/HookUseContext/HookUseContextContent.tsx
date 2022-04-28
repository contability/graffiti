const HookUseContextContent : any = ( {isDark} : any ) => {
    return(
        <div className="content"
            style={{
                backgroundColor : isDark ? 'black' : 'white',
                color : isDark ? 'white' : 'black'
            }}
        >
            <p>아저씨, 좋은 하루 되세요</p>
        </div>
    );

}

export default HookUseContextContent;