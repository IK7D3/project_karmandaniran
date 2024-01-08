export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-sky-400 shadow-sm focus:ring-sky-500 ' +
                className
            }
        />
    );
}
