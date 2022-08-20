import styled from "styled-components";
import Users from "../components/user/Users";

const Main : Function = () => {

    return (
        <MainBox>
            <Users />
        </MainBox>
    );
};

const MainBox = styled.div`
    width: 1330px;
`;

export default Main;