import { IoMdArrowDropdown } from "react-icons/io";
import './search.css';
const Search=()=>{
    return(
        <div className="search-bg">
            <input type="search" placeholder="Search"/>
            <div>
                <button className="btn btn-primary">New<IoMdArrowDropdown/></button>
            </div>
        </div>
    )
}
export default Search;