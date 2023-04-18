import SearchBar from '../SearchBar/SearchBar';
import { NavLink} from 'react-router-dom';

const Nav = ({onSearch, setAccess}) => {

    const handleLogOut = ()=>{
        setAccess(false)
}

return <div>
        <SearchBar onSearch={onSearch} />
        <button><NavLink to="/favorites">Favorites</NavLink></button>
        <button> <NavLink to="/about">About</NavLink></button>
        <button><NavLink to="/home"> Home </NavLink></button>
        <button onClick={handleLogOut}>Log Out</button>
    </div>

}

export default Nav