import { Link } from "react-router-dom";

export default function RootComponent(){
    return (
        <div>
            <span>Hook List</span>
            <div>
                <ul>
                    <li>
                        <Link to='/useState'>1. useState</Link>
                    </li>
                    <li>
                        <Link to='/useEffect'>2. useEffect</Link>
                    </li>
                    <li>
                        <Link to='/useRef'>3. useRef</Link>
                    </li>
                    <li>
                        <Link to='/useContext'>4. useContext</Link>
                    </li>
                    <li>
                        <Link to='/useMemo'>5. useMemo</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}