import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface usersInterface{
    nickname: string;
    oname: string;
    building_count: number;
}

const Users: Function = () => {

    const [ userList, setUserList ] = useState<usersInterface[]>();
    const getUsersList = async () => {
        // await fetch(`https://raw.githubusercontent.com/jejodo-dev-team/open-api/main/frontend.json`)
        // .then((res) => {
        //     console.log("users", res.json());
        // })
        // .catch((err) => console.error(err));

        await axios.get(`https://raw.githubusercontent.com/jejodo-dev-team/open-api/main/frontend.json`)
        .then(( { data } ) => {
            // return 되는 배열 마지막에 comma 때문에 데이터 가공하여 파싱
            const usersList = JSON.parse(data.slice(0, data.length -3) + "]");
            setUserList(usersList);
        }).
        catch(err => console.error(err));
    };

    useEffect(() => {
        getUsersList();
    }, []);
    return (
        <UsersBox>
            <section className="introduce">
                <div>화섬 아파트 지구家 입주민들</div>
                <div>
                    <p>화섬 아파트에 입주한 입주민들입니다.</p>
                    <p>같이 화성에 가는날을 기다리며 화목하게 지내봐요!</p>
                </div>
            </section>
            {userList?.map((v, i) => (
                <div>{v.nickname}</div>
            ))}
        </UsersBox>
    );
};

const UsersBox = styled.article`
    
`;

export default Users;