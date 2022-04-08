import dummy from "../db/data.json";

export default function Day() {
    // dummy.words
    const day = 1;
    //단어에 필터를 걸어서 day가 1인 것만 나오게함
    const wordList = dummy.words.filter(word => (
        word.day === 1
    ));
    console.log(wordList);
    return (
        <>
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