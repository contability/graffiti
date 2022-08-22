import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { userFilterList } from "../../data/D_user_filterList";
import Filter from "../common/Filter";
import { usersInterface } from "./Users";

const UserTap: Function = ({ totalUserCount, content, set }: any) => {
    const [active, setActive] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("all");
    const deviceType = useSelector((state: any) => state.common.deviceType);

    const filtering: Function = () => {
        let filteredList: usersInterface[] = [];
        
        if(filter === "all"){
            // console.log(content);
            set(content);
        }else{
            filteredList = content.filter((v: usersInterface, i: number) => {
                if(filter === "5"){
                    return v.building_count >= parseInt(filter);
                }else{
                    return v.building_count === parseInt(filter);
                }
            });
            // console.log(filteredList);
            set(filteredList);
        }
    };

    useEffect(() => {
        filtering();
    }, [content, filter]);

    return(
        <UserTapBox>
            <div className="userListTap">
                <p className="tap">
                    <span>입주민들</span>
                    <span>{totalUserCount}</span>
                </p>
                <Filter active={active} setActive={setActive}/>
            </div>
            {active && (
                <div className="filterList">
                    <span>보유 아파트</span>
                    {userFilterList.map((v, i) => (
                        <span 
                            key={i} 
                            className={`${deviceType === "M" ? "isMobile" : "isNotMobile"} ${v.id === filter ? "activeFilter" : "inactiveFilter"}`} 
                            onClick={() => setFilter(v.id)}
                        >
                            {v.name}
                        </span>
                    ))}
                </div>
            )}
        </UserTapBox>
    );
};

const UserTapBox = styled.section`
    .filterList{
        font-family: 'Noto Sans KR';
        font-style: normal;
        padding: 27px 0 11px 0;

        > span{
            padding: 4px 12px;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: -0.05em;
            color: #999999;

            &:first-child{
                padding-left: 12px;
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                color: #000000;
            }
        }

        .isMobile{
            font-size: 12px;
            padding: 4px 11px;
        }

        .isNotMobile{
            margin-right: 12px;
        }

        .inactiveFilter{
            &:hover{
                font-weight: 700;
                // font-size: 14px;
                line-height: 20px;
                letter-spacing: -0.05em;
                color: #000000;
            }
        }

        .activeFilter{
            padding: 4px 12px;
            background: #000000;
            border-radius: 20px;
            font-weight: 700;
            color: #FFFFFF;
        }
    }
`;

export default UserTap;