import { CustomButton } from "@/components/Elements"
import { SectionLayout } from "../Layout"
export const ContactSection = () => {
    return (
        <SectionLayout
            id="contact"
            title="Contact"
            description="閲覧ありがとうございました。お問い合わせはこちらからお願いします。"
        >
            <div className="flex flex-row justify-center my-10">
                <CustomButton to='/contact'>
                    お問い合わせ
                </CustomButton>
            </div>
        </SectionLayout>
    )
}