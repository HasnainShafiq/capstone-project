export const Button = ({ children, buttonType, ...otherProps }) => {
    
    const BUTTON_TYPE_CLASSES = {
        formSubmit: "bg-indigo-800 hover:bg-indigo-900 rounded-sm font-sans uppercase font-bold text-md",

        google: 'flex justify-center items-center rounded-sm bg-neutral-950 w-2/4 hover:bg-black space-x-2 px-2 py-2 mt-4 text-md'
    }
    
    return (
        <button
            className={`${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
          >
            {children}
          </button>
    )
}