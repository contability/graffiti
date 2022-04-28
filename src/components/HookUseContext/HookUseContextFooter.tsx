const HookUseContextFooter : any = ( {isDark, setIsDark} : any ) => {
    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <footer className="footer" style={{
            backgroundColor : isDark ? 'black' : 'lightgray'
        }}>
            <button className="button" onClick={toggleTheme}>
                Dark Mode
            </button>
        </footer>
    );
}

export default HookUseContextFooter;