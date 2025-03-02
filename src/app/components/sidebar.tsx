import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-full w-[25%] bg-gray-900 text-white p-6">
            <h1 className="text-2xl font-bold">Nicholas Middelberg</h1>
            <h2 className="text-lg mt-2">Software Engineer</h2>
            <p className="text-sm mt-2">Short Sentence About Me</p>
            <nav className="mt-6">
                <ul className="space-y-4">
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#projects">Projects</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </nav>
        </aside>

    );
}