import styled from "styled-components";
import headerBg from "../../assets/image/I_banner_pattern.png";
import headerChar from "../../assets/image/I_banner_char.png";

const Mheader: Function = () => {
    return(
    <MheaderBox>
        <img className="headerBg" src={headerBg} alt="" />
        <img className="headerChar" src={headerChar} alt="" />
    </MheaderBox>
    );
};



const MheaderBox = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1550px;
    height: 288px;
    z-index: 99;

    .headerBg{
        position: fixed;
        width: 1550px;
        height: 240px;
        top: 0;
        z-index: 99;
    }

    .headerChar{
        position: fixed;
        height: 240px;
        top: 0;
        z-index: 100;
    }
`;

export default Mheader;