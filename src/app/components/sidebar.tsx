import Link from "next/link";

export default function Sidebar() {
    return (
        <aside>
            <h1>Nicholas Middelberg</h1>
            <h2>Software Engineer</h2>
            <p>Short Sentence About Me</p>
            <nav>
                <ul>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#education">Education</Link></li>
                    <li><Link href="#experience">Experience</Link></li>
                    <li><Link href="#projects">Projects</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </nav>
        </aside>

    );
}