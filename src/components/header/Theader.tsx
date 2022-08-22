import styled from "styled-components";
import headerBg from "../../assets/image/I_banner_pattern.png";
import headerChar from "../../assets/image/I_banner_char.png";

const Theader: Function = () => {
    return(
    <TheaderBox>
        <img className="headerBg" src={headerBg} alt="" />
        <img className="headerChar" src={headerChar} alt="" />
    </TheaderBox>
    );
};

const TheaderBox = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1920px;
    height: 348px;
    z-index: 99;

    .headerBg{
        position: fixed;
        width: 1920px;
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

export default Theader;