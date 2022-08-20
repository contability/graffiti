import axios from "axios";
import { profile } from "console";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { profileImgs, profileImgsType } from "../../data/D_userList_img";
import Icon_subNick from "../../assets/icon/Icon_subNick.png";
import Icon_subOrgName from "../../assets/icon/Icon_subOrgName.png";
import Icon_search from "../../assets/icon/Icon_search.png";
import Icon_filter from "../../assets/icon/Icon_filter.svg";

interface usersInterface{
    nickname: string;
    oname: string;
    building_count: number;
}

const Users: Function = () => {

    const [ userList, setUserList ] = useState<usersInterface[]>();
    const getUsersList = async () => {
        await axios.get(`https://raw.githubusercontent.com/jejodo-dev-team/open-api/main/frontend.json`)
        .then(( { data } ) => {
            // return 되는 배열 마지막에 comma 때문에 데이터 가공하여 파싱
            const usersList = JSON.parse(data.slice(0, data.length -3) + "]");
            console.log(userList);
            
            setUserList(usersList);
        }).
        catch(err => console.error(err));
    };

    useEffect(() => {
        getUsersList();
    }, []);
    return (
        <UsersBox>
            <section className="guide">
                <div>화섬 아파트 지구家 입주민들</div>
                <div>
                    <p>화섬 아파트에 입주한 입주민들입니다.</p>
                    <p>같이 화성에 가는날을 기다리며 화목하게 지내봐요!</p>
                </div>
            </section>
            <section className="searchBar">
                <input type="text" placeholder="rewgerg"/>
                <img src={Icon_search} alt="" />
            </section>
            <section className="userList">
                <div className="userListTap">
                    <p className="tap">
                        <span>입주민들</span>
                        <span>{userList?.length || 0}</span>
                    </p>
                    <p className="filterOptWrap">
                        <img src={Icon_filter} alt="" className="filterOpt" />
                    </p>
                </div>
                {userList?.map((v, i) => (
                    <div key={i} className="userInfo">
                        {profileImgs.map((profile: profileImgsType, j: number) => {
                            if(v.oname === profile.oname){
                                return <img src={ profile.profile_thumb } alt="" />
                            }
                        })}
                        <div className="userInfoCon">
                            <p>
                                <span className="profileNick">{v.nickname}</span>
                                <span className="buildingCount">{`지구家 아파트 ${v.building_count}개`}</span>
                            </p>
                            <p className="subUserInfo">
                                <img src={Icon_subNick} alt="" className="subNameIcon" />
                                <span className="profileSub">{v.nickname}</span>
                                <img src={Icon_subOrgName} alt="" className="subNameIcon" />
                                <span className="profileSub">{v.oname}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </UsersBox>
    );
};

const UsersBox = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Noto Sans KR';
    font-style: normal;

    .guide{
        margin-bottom: 48px;
        > div{
            &:first-child{
                
                font-weight: 700;
                font-size: 40px;
                line-height: 56px;
                text-align: center;
                letter-spacing: -0.05em;
                color: #000000;
                padding-bottom: 20px;
            }

            &:last-child{
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                text-align: center;
                letter-spacing: -0.05em;
                color: #000000;
            }
        }
    }

    .searchBar{
        width: 400px;
        height: 32px;
        background: #FFFFFF;
        border: 1px solid #000000;
        border-radius: 20px;
        padding: 0 17px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 56px;
    }

    .userList{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        .userListTap{
            width: 560px;
            height: 32px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #000000;

            .tap{
                height: 32px;
                background: #000000;
                border: 1px solid #000000;
                border-radius: 10px 10px 0 0;
                padding: 6px 16px;

                > span{
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -0.05em;

                    &:first-child{
                        color: #FFFFFF;
                        padding-right: 4px;
                    }

                    &:last-child{
                        color: #4498F2;
                    }
                }
            }

            .filterOptWrap{
                .filterOpt{
                }
            }
        }

        > .userInfo{
            width: 560px;
            height: 94px;
            background: #FFFFFF;
            border: 1px solid #000000;
            border-radius: 10px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            padding: 0 24px;
            gap: 20px;

            > img{
                width: 60px;
                height: 60px;
            }

            .userInfoCon{
                > p:first-child{
                    padding-bottom: 12px;
                }
            }

            .profileNick{
                font-weight: 700;
                font-size: 18px;
                line-height: 26px;
                letter-spacing: -0.05em;
                color: #000000;
                padding-right: 12px;
            }

            .buildingCount{
                font-weight: 700;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: -0.05em;
                color: #4498F2;
            }


            .subUserInfo{
                display: flex;
                align-items: center;
                flex-direction: row;

                .profileSub{
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    letter-spacing: -0.05em;
                    color: #999999;
                    padding: 0 12px 0 4px;
                    
                }
                
                .subNameIcon{
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }
`;

export default Users;