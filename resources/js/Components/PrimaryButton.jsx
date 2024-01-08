export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                ` items-center text-center px-4 py-2 bg-sky-400 border
                font-vazir
                 border-transparent 
                rounded-md font-semibold text-base text-white uppercase 
                tracking-wider hover:bg-sky-600 focus:bg-sky-700
                 active:bg-sky-900
                 focus:outline-none focus:ring-2 focus:ring-sky-500 
                 focus:ring-offset-2 transition 
                 ease-in-out duration-150 ${disabled && "opacity-25"} ` +
                className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
