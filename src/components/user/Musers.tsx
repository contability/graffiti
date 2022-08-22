import axios from "axios";
import { profile } from "console";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { profileImgs, profileImgsType } from "../../data/D_userList_img";
import Icon_subNick from "../../assets/icon/Icon_subNick.png";
import Icon_subOrgName from "../../assets/icon/Icon_subOrgName.png";
import Icon_search from "../../assets/icon/Icon_search.png";

import Pagination from "../common/Pagination";
import UserTap from "./UserTap";
import SelectPopup from "../common/SelectPopup";
import SearchBar from "../common/SearchBar";
import { useSelector } from "react-redux";
// import UserFilter from "../filter/UserFilter";

export interface usersInterface{
    nickname: string;
    oname: string;
    building_count: number;
}

const Musers: Function = () => {
    const ITEM_COUNT_PER_PAGE = 8;

    const [ userList, setUserList ] = useState<usersInterface[]>();
    const [ filteredItem, setFilteredItem ] = useState<usersInterface[]>([]);
    const [renderItem, setRenderItem] = useState<usersInterface[]>();

    const userSearchKeyword = useSelector((state: any) => state.common.userSearchKeyword);

    const getUsersList = async () => {
        await axios.get(`https://raw.githubusercontent.com/jejodo-dev-team/open-api/main/frontend.json`)
        .then(( { data } ) => {

            // 2022.08.20
            // return 되는 배열 마지막에 comma 때문에 데이터 가공하여 파싱
            
            // 2022.08.21 
            // 데이터 신텍스 수정 확인 완료 -> 가공 필요 없어짐 -> 주석 처리
            // const usersList = JSON.parse(data.slice(0, data.length -3) + "]");
            
            setUserList(data);
            setFilteredItem(data);
        }).
        catch(err => console.error(err));
    };

    const chkText = (nickName: string) => {
        let re = new RegExp(userSearchKeyword, "gi");
        return nickName.replace(re, `<span class=containKeyword>${userSearchKeyword}</span>`);
    };

    useEffect(() => {
        getUsersList();
    }, []);
    
    return (
        <MusersBox>
            <section className="title">
                <div>화섬 아파트 지구家 입주민들</div>
                <div>
                    <p>화섬 아파트에 입주한 입주민들입니다.</p>
                    <p>같이 화성에 가는날을 기다리며 화목하게 지내봐요!</p>
                </div>
            </section>
            <SearchBar content={userList} set={setFilteredItem}/>
            <section className="userList">
            <UserTap 
                    totalUserCount={userList?.length || 0} 
                    content={userList}
                    set={setFilteredItem}
                />
                {renderItem?.map((v, i) => (
                    <div key={i} className="userInfo">
                        {profileImgs.map((profile: profileImgsType, j: number) => {
                            if(v.oname === profile.oname){
                                return <img key={j} src={ profile.profile_thumb } alt="" />
                            }
                        })}
                        <div className="userInfoCon">
                            <p>
                                <span className="profileNick" dangerouslySetInnerHTML={{__html: chkText(v.nickname)}}></span>
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
                <Pagination 
                    content={filteredItem} 
                    set={setRenderItem}
                    itemCountPerPage={ITEM_COUNT_PER_PAGE}
                />
            </section>
        </MusersBox>
    );
};

const MusersBox = styled.article<any>`
    font-family: 'Noto Sans KR';
    font-style: normal;
    position: relative;
    width: 1024px;
    overflow-y: auto;
    z-index: 1;

    .title{
        margin-bottom: 48px;
        > div{
            &:first-child{
                font-weight: 700;
                font-size: 28px;
                line-height: 36px;
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

    .searchBarWrap{
        width: 100%;
        margin-bottom: 56px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 10;

        .searchBar{
            padding: 0 17px;

            z-index: 7;
            width: 360px;
            height: 32px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            background: #FFFFFF;
            border: 1px solid #000000;
            border-radius: 20px;
            // padding: 0 12px 0 28px;

            & > input{
                width: 100%;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: -0.05em;
                color: #000000;
    
                &::placeholder {
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -0.05em;
                    color: #999999;
                }
            }
        }
    }

    .userList{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding-bottom: 16px;

        .userListTap{
            width: 360px;
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
                padding: 0 16px;

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
        }

        > .userInfo{
            width: 360px;
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

                .containKeyword{
                    color: #000000;
                    background: #a2ccf9;
                }
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

export default Musers;