import React, { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { FiAlertTriangle } from 'react-icons/fi'
import './Filters.scss'
import { useDispatch, useSelector } from 'react-redux'
import { searchText } from '../../redux/Action'
import { searchSelector } from '../../redux/Selector'

const Filters = () => {
    const [textFilter, setTextFilter] = useState('')

    const dispatch = useDispatch()
    const selector = useSelector(searchSelector)

    const handleSearch = (e) => {
        setTextFilter(e.target.value);
        dispatch(searchText(e.target.value))
    }


    return (
        <>
            <label id='heading' >
                Search
                <FiAlertTriangle style={{ marginLeft: '8px' }} />
            </label>
            <div className="search">
                <input
                    value={textFilter}
                    type="text"
                    placeholder="search your todo..."
                    className="search__input"
                    onChange={handleSearch}
                />
                <button className="search__btn" >
                    <RiSearchLine style={{ fontSize: '16px' }} />
                </button>
            </div>


        </>
    )
}

export default Filters