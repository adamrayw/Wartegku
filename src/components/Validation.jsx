import React from 'react'

export default function Validation(props) {
    return (
        <div className='text-left text-sm text-red-500'>{props.error}</div>
    )
}
