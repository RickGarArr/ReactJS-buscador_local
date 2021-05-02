import { useState } from "react";

import './style.css';

export default function SearchBox({ onSearch, onClose }) {
    const [searchText, setSearchText] = useState("");
    const handleCancelClick = () => {
        setSearchText("");
        onClose();
    }
    const handleSearchClick = () => {
        if(searchText !== "" && searchText.trim() !== "") {
            onSearch(searchText);
        }
    }

    const handleSearchValue = ({target: { value }}) => {
        if(value === "" || value.trim() === "") {
            onClose();
        }
        setSearchText(value);
    }

    const handleKeyPress = ({charCode}) => charCode === 13 ? handleSearchClick() : undefined;

    return (
        <div className="search-box">
            <input className="search-box-input" type="text" value={searchText} onKeyPress={handleKeyPress} onChange={handleSearchValue} placeholder="Buscar" />
            <div className="buttons">
                <button className="search-button" onClick={handleSearchClick}><span>Buscar</span></button>
                <button className="cancel-button" onClick={handleCancelClick}><span>Cancelar</span></button>
            </div>
        </div>
    )
}