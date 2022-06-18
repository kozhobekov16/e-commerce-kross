import React from 'react'
import s from './Search.module.scss'
const Search = () => {
    return (
        <div className={s.search}>
            <h1>
                Все кроссовки
            </h1>
            <input 
            placeholder='поиск'
            type="search"
            />
        </div>
    )
}

export default Search