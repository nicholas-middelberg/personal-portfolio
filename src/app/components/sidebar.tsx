"use client";
import { useState, useRef, useEffect } from "react";

export default function Sidebar() {
    const [activeItem, setActiveItem] = useState<string>("About");
    const navItems = ["About", "Education", "Experience", "Projects", "Contact"];
    const indicatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const activeLink = document.querySelector(".nav-item.active") as HTMLElement;
        if (activeLink && indicatorRef.current) {
            indicatorRef.current.style.top = `${activeLink.offsetTop}px`;
            indicatorRef.current.style.height = `${activeLink.offsetHeight}px`;
        }
    }, [activeItem]);

    // Scrollspy logic
    useEffect(() => {
        const handleScroll = () => {
            let current = navItems[0];
            for (let i = 0; i < navItems.length; i++) {
                const section = document.getElementById(navItems[i].toLowerCase());
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 120) {
                        current = navItems[i];
                    }
                }
            }
            setActiveItem(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <aside className="sidebar">
            {/* <div className="avatar">N</div> */}
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