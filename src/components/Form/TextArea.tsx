type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export const TextArea = ({className, rows, ...props}: TextAreaProps) => {
    return (

        <textarea
            rows={rows || 5}
            className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  ${className}`}
            {...props}
        >
        </textarea>

    )
}