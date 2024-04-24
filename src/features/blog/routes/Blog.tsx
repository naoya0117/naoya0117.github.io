import { ContentLayout } from "@/components/Layout";

export const Blog = () => {
    return (
        <ContentLayout title="Blog" description="色々書きます">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl">Blog</h2>
                <div className="pt-10">
                    現在、投稿済みの記事はありません。
                </div>
            </div>
        </ContentLayout>
    );
}