import React from 'react'

const SearchBar = (props) => {
    return (
        <form className="ui segment inverted red" onChange={props.handleFilter}>
            <input type="radio" name="class" value="all" /> all <br/>
            <input type="radio" name="class" value="support" /> support <br/>
            <input type="radio" name="class" value="assault" /> assault <br/>
            <input type="radio" name="class" value="defender" /> defender <br/>
        </form>
    )
}

export default SearchBar