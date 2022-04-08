import { useParams } from "react-router-dom";
import dummy from "../db/data.json";

export default function Day() {
    // dummy.words

    // useParams 이렇게 써도 되고
    const a = useParams();
    const day = a.day;

    //이렇게 써도 되고
    // const day = useParams().day;

    // 이렇게도 됨
    // const {day} = useParams();

    //단어에 필터를 걸어서 day가 1인 것만 나오게함
    const wordList = dummy.words.filter(word => (
        //Number(). 숫자로 형변환. parseInt랑 똑같은듯.
        word.day === Number(day)
    ));

    return (
        <>
        <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <tr key={word.id}>
                            <td>
                                {word.eng}
                            </td>
                            <td>
                                {word.kor}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );

}