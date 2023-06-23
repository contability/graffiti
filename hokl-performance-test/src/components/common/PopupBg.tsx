import styled from "styled-components";

const PopupBg : Function = ({ bg, off, blur, imgBg } : any) => {
    const onClickEvent = () => {
        if(off) off();
    };

    const getOpt = () => {
        let className = "";

        if(bg) className += " bg";
        if(blur) className += " blur";
        if(imgBg) className += " imgBg";

        return className;
    };

    return (
        <PopupBgBox className={getOpt()} onClick={onClickEvent}/>
    );
};

const PopupBgBox = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;

    &.bg{
        background: rgba(0, 0, 0, 0.4);
    }

    &.blur{
        -webkit-backdrop-filter: blur(50px);
        backdrop-filter: blur(7px);
    }

    &.imgBg{
        z-index: 51;
    }
`;

export default PopupBg;