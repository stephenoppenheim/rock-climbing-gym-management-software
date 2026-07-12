
import "./SearchBar.css";
import Input from "../Input/Input";

const SearchBar = ({ updateQuery }) => {

    return (
        <Input name="search" placeholder="Name, email, or phone number..." value={query} onChange={(e) => updateQuery(e.target.value)}/>
    )
}

export default SearchBar;