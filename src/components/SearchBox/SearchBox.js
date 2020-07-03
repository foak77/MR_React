import "../../styles/searchBox.css"
import React from 'react'

export const SearchBox = ({placeholder, onSearchChange}) => (
        <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange= { onSearchChange } />
    )
