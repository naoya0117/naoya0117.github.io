type SectionLayoutProps = {
    id: string;
    className?: string;
    title?: string;
    description?: string;
    children: React.ReactNode;
};

export const SectionLayout = ({ id, className, title, description, children }: SectionLayoutProps) => {
    return (
        <div id={id} className={`flex flex-col items-center justify-center max-w-[90%] mx-auto py-32 ${className}`}>
            {title || description ? (
                <div className="flex flex-col sm:m-20 sm:flex-row">
                    <h2 className="text-3xl mr-8 mb-8 sm:py-0">{title}</h2>
                    <p className="max-w-[400px] mb-8">{description}</p>
                </div>
            ): null}
            {children}
        </div>
    )
}