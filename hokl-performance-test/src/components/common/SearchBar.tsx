import { MouseEventHandler, useEffect, useState } from "react";
import styled from "styled-components";
import PopupBg from "./PopupBg";
import SelectPopup from "./SelectPopup";
import Icon_search from "../../assets/icon/Icon_search.png";
import { usersInterface } from "../user/Users";
import { useDispatch } from "react-redux";
import { setUserSearchKeyword } from "../../reducers/common";
import { useSelector } from "react-redux";

const SearchBar: Function = ({ content, set } : any) => {
    const [searchSelectPopup, setSearchSelectPopup] = useState<boolean>(false);
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const dispatch = useDispatch();
    const deviceType = useSelector((state : any) => state.common.deviceType);

    const search: any = () => {
        if(!searchKeyword){
            set(content);
        } else{
            let filteredList = content?.filter((v: usersInterface, i: number) => {
                return v.nickname.indexOf(searchKeyword) > -1;
            });
            set(filteredList);
        }
        setSearchSelectPopup(false);
    };

    useEffect(() => {
        dispatch(setUserSearchKeyword(searchKeyword));
    }, [searchKeyword]);

    return (
        <SearchBarBox deviceType={deviceType}>
                <div className="searchBar">
                    <input 
                        type="text" 
                        placeholder="검색" 
                        value={searchKeyword}
                        onClick={() => setSearchSelectPopup(true)} 
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        onKeyPress={(e) => {if(e.key === "Enter") search()}}
                    />
                    <button onClick={search}>
                        <img src={Icon_search} alt="" />
                    </button>
                </div>
                {searchSelectPopup && (
                    <>
                        <SelectPopup 
                            set={setSearchKeyword} 
                            off={setSearchSelectPopup}
                            content={content}
                            keyword={searchKeyword}
                        />
                        <PopupBg off={setSearchSelectPopup} />
                    </>
                )}
            </SearchBarBox>
    );
};

const SearchBarBox = styled.section<any>`
    width: 100%;
    margin-bottom: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
    
    .searchBar{
        z-index: 7;
        // width: 400px;
        width: ${props => props.deviceType === "M" ? "360px" : "400px"};
        height: 32px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background: #FFFFFF;
        border: 1px solid #000000;
        border-radius: 20px;
        padding: 0 12px 0 28px;

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
`;

export default SearchBar;