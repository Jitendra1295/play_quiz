import React from 'react'
import logo from "../logo.jpg"

const Nav = () => {
    return (
        <div className="App">
            <header className="header">
                <img src={logo} className="App-logo" alt="logo" />
                <div style={{ textAlign: "left", marginLeft: "15px" }}>
                    <p style={{ fontSize: "30px", margin: "0" }}>
                        {"Welcome To QuizzyMind"}
                    </p>
                    <p style={{ fontSize: "20px", margin: "0" }}>
                        {"TEST YOUR KNOWLEDGE"}
                    </p>
                    <p style={{ fontSize: "16px", fontStyle: "italic", margin: "0" }}>
                        {new Date().toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                </div>
            </header>
        </div>
    )
}

export default Nav
