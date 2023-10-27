import Logo from "./layout/logo";

export default function Footer() {
    return (
        <footer className="footer border z-10 border-t-[#142579] border-l-transparent border-r-transparent border-b-transparent bg-gradient-to-r from-slate-950 to-pink-900 text-white">
            <div className="container p-12 flex justify-between">
                <span><Logo/></span>
                <small className="pt-4 pl-12 text-[#f2ff3f]">All rights reserved © {new Date().getFullYear()} OR Setuke</small>
            </div>
        </footer>
    )
}