
import "./SearchUser.css"
import { CiSearch } from "react-icons/ci";

function SearchUser() {
  return (
    <div className="my-3 mb-9 h-[10vh]">
        <h1> <span style={{color:"crimson",fontSize:"1.5rem"}}>R.</span>Talk</h1>
        <div className="searchBox">
            
            <input type="text" placeholder="rishika..." />
            <CiSearch className="searchIcon"/>
        </div>
      
    </div>
  )
}

export default SearchUser