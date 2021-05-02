
import SearchResultItem from '../SearchResultItem';
import './styles.css';

export default function SearchResults({usersData}) {
    const rearchResultItems = usersData.map( user => ( <SearchResultItem key={user.id} {...user}/> ));
    return(
        <div className="search-result-list"> { rearchResultItems } </div>
    );
}