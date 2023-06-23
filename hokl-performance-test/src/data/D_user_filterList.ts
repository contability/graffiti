export interface userFilterListType {
    id: string;
    name: string;
};

const userFilterList: userFilterListType[] = [{
    id: "all",
    name: "전체"
},{
    id: "5",
    name: "5개 이상"
},{
    id: "4",
    name: "4개"
},{
    id: "3",
    name: "3개"
},{
    id: "2",
    name: "2개"
},{
    id: "1",
    name: "1개"
}];

export {
    userFilterList
};