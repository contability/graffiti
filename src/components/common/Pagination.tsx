import styled from "styled-components";
import Icon_first from "../../assets/icon/Icon_first.png";
import Icon_previous from "../../assets/icon/Icon_previous.png";
import Icon_next from "../../assets/icon/Icon_next.png";
import Icon_last from "../../assets/icon/Icon_last.png";
import { useEffect, useState } from "react";

const Pagination: Function = ({ content, set }: any) => {
    // const [userLength, setUserLength] = useState<number>(0);
    // const [currentList, setCurrentList] = useState<usersInterface[]>();
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [pages, setPages] = useState<number>(0);
    const ITEM_COUNT_PER_PAGE = 8;
    
    const onClickFirst = () => {
        setCurrentPage(0);
    };
    const onClickPrev = () => {
        setCurrentPage(currentPage - 1);
    };
    const onClickNext = () => {
        setCurrentPage(currentPage + 1);
    };
    const onClickLast = () => {
        setCurrentPage(pages - 1);
    };

    useEffect(() => {
        setPages(Math.ceil(content.length / ITEM_COUNT_PER_PAGE));
    }, [content]);

    useEffect(() => {
        let currnetList = content.slice();
    }, [currentPage])

    // const 
    return (
        <PaginationBox>
            <span className="first" onClick={onClickFirst}>
                <img src={Icon_first} alt="" className="firstBtn" />
            </span>
            <span className="prev" onClick={onClickPrev}>
                <img src={Icon_previous} alt="" className="prevBtn" />
            </span>
            <p>
                {Array
                .from({length: pages}, (v, i) => i + 1)
                .map((page, j) => (
                    <span key={j} onClick={() => setCurrentPage(j)} className={`pageNum ${currentPage === j ? "active" : ""}`}>{page}</span>
                ))}
            </p>
            <span className="next" onClick={onClickNext}>
                <img src={Icon_next} alt="" className="nextBtn" />
            </span>
            <span className="last" onClick={onClickLast}>
                <img src={Icon_last} alt="" className="lastBtn" />
            </span>
        </PaginationBox>
    );
};

const PaginationBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 12px;
    font-family: 'Noto Sans KR';
    font-style: normal;

    p{
        padding: 0 12px;

        .pageNum{
            font-weight: 500;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: -0.05em;
            color: rgba(0, 0, 0, 0.5);
    
            &:nth-child(2){
                padding: 0 12px;
            }
        }

        .active{
            color: #000000;
        }
    }
    

`;

export default Pagination;