import React from 'react'

const withClass = (WrappedComponnt, className) => {
    return props => (
        <div className = {className}>
            <WrappedComponnt {...props}/>
        </div>
    )
}

export default withClass