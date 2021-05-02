import { useEffect, useState } from "react";

import SearchBox from "./components/SearchBox";
import SearchResults from './components/SearchResult';

import './styles.css';

import data from '../../data/users.json';

export default function Search() {

    const [isAtTop, setIsAtTop] = useState(false);
    const [usersData, setUsersData] = useState(data);
    const [filteredUsers, setFilteredUsers] = useState([]);
    
    const handleSearchClick = (searchText) => {
        setFilteredUsers([]);
        setIsAtTop(true);
        if (usersData?.length) {
            const filteredData = usersData.filter( (user) => {
                const searchTextMinus = searchText.toLowerCase();
                return (
                    user.name.toLowerCase().includes(searchTextMinus) ||
                    user.email.toLowerCase().includes(searchTextMinus) ||
                    user.phone.toLowerCase().includes(searchTextMinus) ||
                    user.username.toLowerCase().includes(searchTextMinus)
                )
            });
            setFilteredUsers(filteredData);
        }
    }

    const handleCloseClick = () => {
        setIsAtTop(false);
        setFilteredUsers([]);
    }
    
    return (
        <div className={"search-container"}>
            <div className={`search-box-container ${ isAtTop ? "search--top" : "search--center"} `}>
                {!isAtTop ? <h2 className="search-box-container-title">Buscador De Personal</h2> : undefined}
                <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick}/>
                {filteredUsers?.length > 0 ? <SearchResults usersData={filteredUsers}/> : undefined}
            </div>
        </div>
    );
}