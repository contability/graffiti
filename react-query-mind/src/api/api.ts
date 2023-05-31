import axios from "axios";

/**
 * axios fetch 공통 부분 묶어서 이렇게 선언하면 편하겠다
 */
const api = axios.create({
    baseURL: "https://worldtimeapi.org/api",
    headers: {
        "content-type" : "application/json; carset=UTF-8",
        accept: "application/json"
    }
});

/**
 * 사용할 api 주소들 나열해서 갖다 쓰자
 */
export const apis = {
    getSeoul: () => api.get("/timezone/Asia/Seoul"), //지금은 단순한 get 요청
    updateSeoul: (data: object) => api.put("/update/blahblah", data)
    // 코드 추가시..
}