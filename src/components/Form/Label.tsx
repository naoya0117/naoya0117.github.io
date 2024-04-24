type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    required?: boolean;
}


export const Label = ({ className, required, children, ...props }: LabelProps) => {
    return (
        <label
            className={`block text-gray-700 ${className}`}
            {...props}
        >
            { children }<span className="text-red-500">{required && "*"}</span>
        </label>
    );
}