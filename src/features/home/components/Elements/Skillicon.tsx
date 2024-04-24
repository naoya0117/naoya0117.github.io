type SkillIconProps = {
    name: string[];
};

export const SkillIcon = ({ name }: SkillIconProps) => {
    return (
        <>
            <div className="flex flex-row justify-center flex-wrap p-3">
            {name.map((n) => (
                <img key={n} src={`https://skillicons.dev/icons?i=${n}`} alt={`${n}`} className="p-1" />
            ))}
            </div>
        </>
    )
};