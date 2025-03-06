"use client";
import { useState, useRef, useEffect } from "react";
 
export default function Sidebar() {
    const [activeItem, setActiveItem] = useState<string>("About");
    const navItems =["About", "Education", "Experience", "Projects", "Contact"]
    const indicatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const activeLink = document.querySelector(".nav-item.active") as HTMLElement;
        if (activeLink && indicatorRef.current) {
          indicatorRef.current.style.top = `${activeLink.offsetTop}px`; // Moves indicator
          indicatorRef.current.style.height = `${activeLink.offsetHeight}px`; // Matches height dynamically
        }
      }, [activeItem]);

    return (
        <aside className="sidebar">
            <h1 className="name">Nicholas Middelberg</h1>
            <h2 className="subtitle">Software Engineer</h2>
            <nav className="navbar">
                <div ref={indicatorRef} className="indicator"></div>
                {navItems.map((item) => (
                <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`nav-item ${activeItem === item ? "active" : ""}`}
                    onClick={() => setActiveItem(item)}
                >
                    {item}
                </a>
            ))}
            </nav>
        </aside>

    );
}