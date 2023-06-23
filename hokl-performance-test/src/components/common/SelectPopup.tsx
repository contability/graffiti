import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { usersInterface } from "../user/Users";

const SelectPopup: Function = ({ set, off, content, keyword } : any) => {
    const [ dropDownList, setDropDownList ] = useState<string[]>([]);
    const deviceType = useSelector((state : any) => state.common.deviceType);
    
    useEffect(() => {
        let results: string[] = [];

        content?.map((v: usersInterface, i: number) => {
            if((results.indexOf(v.nickname) < 0) && keyword && (v.nickname.indexOf(keyword) > -1)){
                results.push(v.nickname);
            }
        });

        setDropDownList(results);
    }, [content, keyword]);

    return (
    <SelectPopupBox deviceType={deviceType}>
        {dropDownList.length > 0 ? (dropDownList?.map((v: any, i: number) => (
            <div key={i} className="nameList" onClick={() =>{ set(v); off();}}>
                <span>{v}</span>
            </div>
        ))):(
            <div>
                <span style={{color:"#999999"}}>닉네임을 검색해 주세요.</span>
            </div>
        )}
    </SelectPopupBox>
    );
};

const SelectPopupBox = styled.div<any>`
    position: absolute;
    width: ${props => props.deviceType === "M" ? "360px" : "400px"};
    max-height: 172px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 15px;
    top: 8px;
    padding: 28px 4px;
    z-index: 6;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.05em;
    color: #000000;
    overflow-y: auto;

    & > div{
        height: 33px;
        padding: 6px 0px;

        & > span{
            height: 36px;
            padding: 0 24px;
        }
    }

    .nameList:hover{
        background: #EEEEEE;
    }
`;

export default SelectPopup;