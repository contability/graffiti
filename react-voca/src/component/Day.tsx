import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
//import useFetch from "../hooks/useFetch.ts";
import Word, { IWord } from "./Word";

export default function Day() {
    // dummy.words

    // useParams 이렇게 써도 되고
    const a = useParams<{day : string}>();
    const day = a.day;

    //이렇게 써도 되고
    // const day = useParams().day;

    // 이렇게도 됨
    // const {day} = useParams();

    //단어에 필터를 걸어서 day가 1인 것만 나오게함
    // const wordList = dummy.words.filter(word => (
    //     //Number(). 숫자로 형변환. parseInt랑 똑같은듯.
    //     word.day === Number(day)
    // ));

    // const [words, setWords] = useState([]);
    const paramDay = useParams().day;
    const wordList = [];
    
    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setWords(data);
    //     });
    // }, [day]);

    const words : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setWords(data);
    //     });
    // }, [day]);
    
    return (
        <>
        <h2>Day {paramDay}</h2>
        {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map(word => (
                         <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>
    );

}