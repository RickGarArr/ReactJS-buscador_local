import './styles.css';

export default function SearchResultItem({ name, email, username }) {
    return (
        <div className="search-result-item">
            <div className="campo">
                <p className="title">Nombre</p>
                <p className="item-name">{name}</p>
            </div>
            <div className="campo">
                <p className="title">Email</p>
                <p>{email}</p>
            </div>
            <div className="campo">
                <p className="title">Username</p>
                <p>{username}</p>
            </div>
        </div>
    );
}