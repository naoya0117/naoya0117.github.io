import { SectionLayout } from "../Layout/SectionLayout";
import { FaGithub, FaArrowDown } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { FadeIn } from "@/components/Animations";

export const AboutSection = () => {
    const [isFocused, setIsFocused] = useState(false);
    const arrowAnimation = useSpring({
        from: { transform: 'translate3d(0, 0px, 0)' },
        to: { transform: isFocused ? 'translate3d(0, 10px, 0)' : 'translate3d(0, 0px, 0)' },
        config: { duration: 200 },
        loop: { reverse: false },
    });

    return (
        <SectionLayout id="about">
            <FadeIn className="flex items-center flex-col">
                <div className="max-w-[350px]">
                    <p className="text-center mb-4 text-gray-800 text-2xl">Welcome to my portfolio!</p>
                    <p className="text-lg text-gray-700">こんにちは、私は情報系の学部に通う大阪の学生です。webアプリの開発に興味があります。</p>
                </div>
                <div className='flex flex-row justify-center'>
                    <a href="https://github.com/naoya0117" className="mt-5 transform transition-transform duration-500 hover:scale-110 p-5">
                        <FaGithub size={50} /> {/* GitHub icon */}
                    </a>
                    <RouterLink to="/contact" className="mt-5 transform transition-transform duration-500 hover:scale-110 p-5">
                        <IoMail size={50} /> {/* Mail icon */}
                    </RouterLink>
                </div>
                <ScrollLink to="skill"
                    smooth={true}
                    duration={500}
                    className="mt-5 cursor-pointer text-gray-300 transition-colors"
                    onMouseEnter={() => setIsFocused(true)}
                    onMouseLeave={() => setIsFocused(false)}>
                    <animated.div style={arrowAnimation}>
                        <FaArrowDown size={50} /> {/* ArrowDown icon */}
                    </animated.div>
                </ScrollLink>
            </FadeIn>
        </SectionLayout>
    );
}