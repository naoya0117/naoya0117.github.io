import { ContentLayout } from '@/components/Layout';
import { AboutSection, SkillSection, HistorySection, ProjectSection, ContactSection } from '../components/Sections';

export const Home = () => {

    return (
        <ContentLayout title="Home" description="大阪の大学に通う学生のポートフォリオです。">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col w-full">
                    <div className="h-[80vh] flex justify-center">
                        <AboutSection />
                    </div>
                    <div className="bg-gray-100  w-full">
                        <SkillSection />
                        <HistorySection />
                        <ProjectSection />
                        <ContactSection />
                    </div>
                </div>
            </div>
        </ContentLayout >
    );
}
