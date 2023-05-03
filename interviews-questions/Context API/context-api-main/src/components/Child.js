import React, { useContext } from 'react'
import { context } from '../App'

function Child() {
    // useContext me "global state --> context" pass kiye 
    const appColor = useContext(context)
    return (
        <>
            <h1 style={{ color: appColor }}>child components</h1>
        </>
    )
}

export default Child