import Link from "next/link";

export default function Header() {
    console.log("hi there")
    return (
        <div className="text-white w-full absolute z-10">
            <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href="/" className="font-bold text-3xl">HHome</Link>
                <div className="space-x-4 text-xl">
                    <Link href="/performance">PPerformance</Link>
                    <Link href="/reliability">RReliability</Link>
                    <Link href="/scale">SScale</Link>
                </div>
            </nav>
        </div>
    )
}