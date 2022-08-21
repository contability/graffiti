import { useState } from "react";
import styled from "styled-components";

import Icon_filter from "../../assets/icon/Icon_filter.svg";
import Icon_filter_active from "../../assets/icon/Icon_filter_active.png";
import { userFilterList } from "../../data/D_user_filterList";
import Filter from "../common/Filter";

const UserTap: Function = ({ totalUserCount }: any) => {
    const [active, setActive] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("all");

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
                        <span key={i} className={`${v.id === filter ? "activeFilter" : "inactiveFilter"}`} onClick={() => setFilter(v.id)}>{v.name}</span>
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
            margin-right: 12px;
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
        .inactiveFilter{
            &:hover{
                font-weight: 700;
                font-size: 14px;
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