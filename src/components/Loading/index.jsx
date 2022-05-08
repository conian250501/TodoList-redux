import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import './loading.scss'

const Loading = () => {
    return (
        <div className="loading">
            <AiOutlineLoading className="loading__icon" />
        </div>
    )
}

export default Loading