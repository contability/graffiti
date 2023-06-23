import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div>
            <div>React Hooks</div>
            <Link to={'/'}>Go To RootPage</Link>            {/* <a href='/'>Go To RootPage</a> 와 같음 */}
            <hr/>
        </div>
        
    );
}