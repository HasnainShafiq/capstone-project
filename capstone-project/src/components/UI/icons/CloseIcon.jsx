export const CloseIcon = ({className, removeItem}) => {
    return (
<svg
onClick={removeItem}
xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${className} w-5 h-auto hover:cursor-pointer hover:bg-indigo-800 hover:text-neutral-50`}>


<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

    )
}
