
type FormProps = {
    children: React.ReactNode;
    className?: string;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = ({ children, className, onSubmit }: FormProps) => {
    return (
        <form className={`flex flex-col justify-center ${className}`} onSubmit={onSubmit}>
            {children}
        </form>
    );
}