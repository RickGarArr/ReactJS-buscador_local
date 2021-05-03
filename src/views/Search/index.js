import { useEffect, useState } from "react";
import axios from 'axios';

import SearchBox from "./components/SearchBox";
import SearchResults from './components/SearchResult';

import './styles.css';

export default function Search() {

    const [isAtTop, setIsAtTop] = useState(false);
    const [usersData, setUsersData] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                // axios
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                console.log(response);
                const data = response.data;
                setUsersData(data);

                // fetch
                // const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
                // const data = await respuesta.json();
                // setUsersData(data);
                // console.log(data);
            } catch (e) {
                console.log(e);
            }
        }
        getUsers();
    }, []);
    
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