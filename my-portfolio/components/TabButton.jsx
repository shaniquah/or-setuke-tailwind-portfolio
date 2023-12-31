export default function TabButton({active, selectTab, children}) {
    const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#75a5c8] border-b border-purple-500'

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
            
        </button>
    )
}