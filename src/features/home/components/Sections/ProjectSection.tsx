import { CustomCard } from "../Elements"
import { SectionLayout } from "../Layout"

export const ProjectSection = () => {
    const ProjectCategories = [
        {
            title: '個人開発',
            projects: [
                {
                    title: 'vim-tetris',
                    summary: 'vimのモードや操作を搭載したテトリスです。viを楽しく学べるように作りました。pthreadで並列処理を行っています',
                    techTags: ['C', 'Bash', 'docker', 'ncurses', 'pthread'],
                    repoUrl: 'https://github.com/naoya0117/vim-tetris'
                },
                {
                    title: 'ポートフォリオ(旧)',
                    summary: 'Webの勉強をするために、初めて作ったポートフォリオサイトです。Github pageでデプロイをしていました。',
                    techTags: ['Typescript', 'CSS', 'Next.js', 'Docker'],
                    repoUrl: 'https://github.com/naoya0117/nextjs_portfolio'
                },
                {
                    title: 'ポートフォリオ',
                    summary: 'このページです。ReactとLaravelをapi連携させており、ブログの投稿機能など動的なwebサイトにする予定です。',
                    techTags: ['Typescript', 'PHP', 'React.js', 'Laravel', 'mysql', 'Docker', 'nginx'],
                    repoUrl: 'https://github.com/naoya0117/homepage',
                    deployUrl: 'https://naoya0117.com'
                }
            ],
        },
        {
            title: 'チーム開発',
            projects: [
                {
                    title: '走れ!すすむくん!',
                    summary: '大学の学祭に向けて作った、ブラウザで動くプラットフォームゲームです。Phaserを使ったゲーム処理を主に担当しました。',
                    techTags: ['React.js', 'Phaser.js', 'Docker', 'Typescript'],
                    repoUrl: 'https://github.com/obanyan2023/susumukun',
                    deployUrl: 'https://susumukun.vercel.app'
                },
                {
                    title: 'Minecraft Bot Contest',
                    summary: 'C言語でキャラを動かすBotコンテストの機能を追加開発しました。中身はPythonで書いてあります。',
                    techTags: ['Python', 'C', 'numpy', 'Pillow'],
                    repoUrl: 'https://github.com/masaki555/Minecraft_Contest'
                },
                {
                    title: 'スケジュール共有アプリ',
                    summary: '所属グループ内で、予定を共有できるカレンダーアプリを開発しました。非同期で予定が最新の予定が自動で画面に反映されるようにしています。',
                    techTags: ['Spring boot', 'H2DB', 'Java', 'html', 'css'],
                    repoUrl: 'https://github.com/e1b21007/schedule'
                }
            ]
        },
        {
            title: 'ただの趣味',
            projects: [
                {
                    title: 'i3+Plasma デスクトップ',
                    summary: 'ArchLinuxを普段使いしており、KDEのPlasmaデスクトップとタイル型wmであるi3を組み合わせて自分好みの環境を使用しています。',
                    techTags: ['Linux', 'Bash'],
                    repoUrl: 'https://github.com/naoya0117/plasma-i3-kwin_sessions'
                },
                {
                    title: 'Qemuスクリプト',
                    summary: 'Windowsや他ディストリビューションの仮想環境を簡単に作れるように起動スクリプトをGitHubに保管しています。',
                    techTags: ['Linux', 'Bash', 'Qemu'],
                    repoUrl: 'https://github.com/naoya0117/qemu-scripts'
                },
                {
                    title: 'vim設定自動化',
                    summary: '仮想環境を作るたびに、vimの設定ファイルを書くのを面倒に感じたので、Bashで自動化しました。普段より、Bashを使ってPCの処理の自動化を心がけています。',
                    techTags: ['Bash', 'vim'],
                    repoUrl: 'https://github.com/naoya0117/vim_runtime'
                }
            ]
        }
    ]

    return (
        <SectionLayout
            id="project"
            title="Project"
            description="自分が過去にかかわったプロジェクトについてまとめておきます。"
        >
            <div className="items-center">
                {
                    ProjectCategories.map((category, index) => (
                        <div key={index} className="flex flex-col justify-center my-30 max-w-[100%] mx-auto">
                            <h3 className="text-left text-2xl my-10">{category.title}</h3>
                            <div className="flex flex-row items-start flex-wrap mx-auto xl:w-[1008px] md:w-[672px] sm:w-[336px]">
                                {category.projects.map((project, index) => (
                                    <CustomCard key={index} title={project.title} summary={project.summary} techTags={project.techTags} repoUrl={project.repoUrl} deployUrl={project.deployUrl} />
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </SectionLayout>
    )
}