import styled from "styled-components";
import headerBg from "../../assets/image/I_banner_pattern.png";
import headerChar from "../../assets/image/I_banner_char.png";

const Pheader: Function = () => {
    return(
    <PheaderBox>
        <img className="headerBg" src={headerBg} alt="" />
        <img className="headerChar" src={headerChar} alt="" />
    </PheaderBox>
    );
};

const PheaderBox = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 2560px;
    height: 348px;
    z-index: 99;

    .headerBg{
        position: fixed;
        width: 2560px;
        height: 300px;
        top: 0;
        z-index: 99;
    }

    .headerChar{
        position: fixed;
        height: 300px;
        top: 0;
        z-index: 100;
    }
`;

export default Pheader;