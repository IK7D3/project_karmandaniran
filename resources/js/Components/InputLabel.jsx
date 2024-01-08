export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-vazir font-medium text-lg text-sky-800 ` + className}>
            {value ? value : children}
        </label>
    );
}
