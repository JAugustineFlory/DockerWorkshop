

export default function SearchBar(props) {
    const setSearchInput = props.setSearchInput;

    return (
        <div className='search-bar'>
            <p>Search: </p>
            <input className='search-bar-input' onChange={(e) => setSearchInput(e.target.value)}></input>
        </div>
    )
}