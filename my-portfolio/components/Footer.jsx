import Logo from "./layout/logo";

export default function Footer() {
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="container p-12 flex justify-between">
                <span><Logo/></span>
                <small className="text-slate-600">All rights reserved © {new Date().getFullYear()} OR Setuke</small>
            </div>
        </footer>
    )
}