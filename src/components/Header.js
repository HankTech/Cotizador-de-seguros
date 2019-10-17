import React from 'react'

const Header = props => {
    return (
        <header className="rounded-top">
            <h1 className="d-flex justify-content-center">
                {props.title}
            </h1>
        </header>
    )
}

export default Header;
