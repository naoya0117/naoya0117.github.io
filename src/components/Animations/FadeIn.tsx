import { useSpring, animated} from 'react-spring';

type FadeInProps = {
    children: React.ReactNode;
    className?: string;
};

export const FadeIn = ( { children, className } :FadeInProps ) => {
    const fade = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 1500 } });

    return (
        <animated.div style={fade} className={className}>
            {children}
        </animated.div>
    );
};