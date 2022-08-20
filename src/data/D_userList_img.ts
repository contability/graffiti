import profile_img01 from "../assets/userThumb/profile_img01.png";
import profile_img02 from "../assets/userThumb/profile_img02.png";
import profile_img03 from "../assets/userThumb/profile_img03.png";
import profile_img04 from "../assets/userThumb/profile_img04.png";
import profile_img05 from "../assets/userThumb/profile_img05.png";
import profile_img06 from "../assets/userThumb/profile_img06.png";
import profile_img99 from "../assets/userThumb/profile_img99.png";

export interface profileImgsType{
    oname: string;
    profile_thumb: any;
}

const profileImgs : profileImgsType[] = [{
    "oname": "hyerincha",
    "profile_thumb": profile_img01
},{
   "oname": "jeup",
   "profile_thumb": profile_img02 
},{
    "oname": "AI",
    "profile_thumb": profile_img03
 },{
    "oname": "외양간주인",
    "profile_thumb": profile_img04
 },{
    "oname": "성희",
    "profile_thumb" : profile_img05
 },{
    "oname": "목하",
    "profile_thumb" : profile_img06
 },{
    "oname": "이름",
    "profile_thumb" : profile_img99
 }];

 export  { profileImgs };