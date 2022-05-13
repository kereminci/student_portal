import React from 'react'
import { useState } from "react"
import "./Nav2.css"

export default function Nav2() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)


    return (
        <nav className="navigation">
            <img src="https://basvuru.istanbulc.edu.tr/assets/img/iuc_large_p.png" alt="Iuc Logo" width="280" height="77" />

            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
            >

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <a href="/home">Home</a>

                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}
