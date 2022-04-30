import { Link } from "react-router-dom";

export default function RootComponent(){
    return (
        <div>
            <span>Hook List</span>
            <div>
                <ol>
                    <li>
                        <Link to='/useState'>useState</Link>
                    </li>
                    <li>
                        <Link to='/useEffect'>useEffect</Link>
                    </li>
                    <li>
                        <Link to='/useRef'>useRef</Link>
                    </li>
                    <li>
                        <Link to='/useContext'>useContext</Link>
                    </li>
                    <li>
                        <Link to='/useMemo'>useMemo</Link>
                    </li>
                    <li>
                        <Link to='/useCallback'>useCallback</Link>
                    </li>
                </ol>
            </div>
        </div>
    );
}