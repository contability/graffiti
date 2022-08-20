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
    width: 1330px;

    .headerBg{
        position: absolute;
        width: 1330px;
    }

    .headerChar{
        position: absolute;
    }
`;

export default Theader;