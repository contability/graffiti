import styled from "styled-components";
import Icon_first from "../../assets/icon/Icon_first.png";
import Icon_previous from "../../assets/icon/Icon_previous.png";
import Icon_next from "../../assets/icon/Icon_next.png";
import Icon_last from "../../assets/icon/Icon_last.png";
import { useEffect, useState } from "react";

const Pagination: Function = ({ content, set, itemCountPerPage }: any) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pages, setPages] = useState<number>(1);
    
    const onClickFirst = () => {
        setCurrentPage(1);
    };

    const onClickPrev = () => {
        setCurrentPage(currentPage - 1);
    };

    const onClickNext = () => {
        setCurrentPage(currentPage + 1);
    };

    const onClickLast = () => {
        setCurrentPage(pages);
    };

    useEffect(() => {
        if(content) setPages(Math.ceil(content.length / itemCountPerPage));
    }, [content]);

    useEffect(() => {
        if(content){
            let offSet = ((currentPage - 1) * itemCountPerPage);
            let limit = offSet + itemCountPerPage;
            set(content.slice(offSet, limit));
        }
    }, [currentPage])

    return (
        <PaginationBox>
            {currentPage !== 1 ? (
                <>
                    <button className="first" onClick={onClickFirst}>
                        <img src={Icon_first} alt="" className="firstBtn" />
                    </button>
                    <button className="prev" onClick={onClickPrev}>
                        <img src={Icon_previous} alt="" className="prevBtn" />
                    </button>
                </>
            ):(
                <div style={{width:"52px"}}></div>
            )}
            <p>
                {Array
                .from({length: pages}, (v, i) => i + 1)
                .map((page, j) => (
                    <button key={j} onClick={() => setCurrentPage(page)} className={`pageNum ${currentPage === j + 1 ? "active" : ""}`}>{page}</button>
                ))}
            </p>
            {currentPage !== pages ? (
                <>
                    <button className="next" onClick={onClickNext}>
                        <img src={Icon_next} alt="" className="nextBtn" />
                    </button>
                    <button className="last" onClick={onClickLast}>
                        <img src={Icon_last} alt="" className="lastBtn" />
                    </button>
                </>    
            ) : (
                <div style={{width:"52px"}}></div>
            )}
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