import { Link } from "react-router-dom";

export default function RootComponent(){
    return (
        <div>
            <span>Hook List</span>
            <div>
                <ul>
                    <li>
                        <Link to='/useState'>useState</Link>
                    </li>
                    <li>
                        <Link to='/useEffect'>useEffect</Link>
                    </li>
                    <li>
                        <Link to='/useRef'>useRef</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}