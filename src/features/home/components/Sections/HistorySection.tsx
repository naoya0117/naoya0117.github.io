import { MyTable } from "../Elements";
import { SectionLayout } from "../Layout";
export const HistorySection = () => {
    const History = {
        headers: ['年', '月', '内容'],
        data: [
            ['2003年', '1月', '生まれる'],
            ['2021年', '3月', '普通科の高校を卒業'],
            ['2021年', '4月', '情報系の学部に入学する'],
            ['2023年', '5月', 'ゼミ配属でチーム開発を経験、webを知る'],
            ['2023年', '8月', 'マイクラコンテスト(学生プロジェクト)に開発スタッフとして参加'],
            ['2023年', '12月~', '長期インターンで実務のweb開発を行う']
        ]
    }

    return (
        <SectionLayout
            id="history"
            title="History"
            description="趣味でLinuxを触ったのをきっかけに技術に興味を持ちました。現在は、プログラミングからソフトウェア設計まで幅広く学習しています。"
        >
            <MyTable headers={History.headers} data={History.data} className="max-w-[700px]" />
        </SectionLayout>
    );
}