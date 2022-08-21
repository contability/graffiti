import styled from "styled-components";

import Icon_filter from "../../assets/icon/Icon_filter.svg";
import Icon_filter_active from "../../assets/icon/Icon_filter_active.png";

const Filter: Function = ({active, setActive} : any) => {
    return (
        <FilterBox>
            {active ? (
                <button className="filterOptWrap" onClick={() => setActive(!active)}>
                    <img src={Icon_filter_active} alt="" className="filterOpt" />
                </button>
            ) : (
                <button className="filterOptWrap"  onClick={() => setActive(!active)}>
                    <img src={Icon_filter} alt="" className="filterOpt" />
                </button>
            )}
        </FilterBox>
    );
};

const FilterBox = styled.div`
    .filterOptWrap{
        .filterOpt{
        }
    }
`;

export default Filter;