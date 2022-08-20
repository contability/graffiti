import styled from "styled-components";
import headerBg from "../../assets/image/I_banner_pattern.png";
import headerChar from "../../assets/image/I_banner_char.png";


const Pheader: Function = () => {
    
    return (
    <PheaderBox>
        <img src={headerBg} alt="" />
    </PheaderBox>
    );
};



const PheaderBox = styled.header`
    
`;

export default Pheader;