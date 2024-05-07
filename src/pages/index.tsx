import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DocumentCard from '../components/DocumentCard/DocumentCard';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            📘ドキュメントの編集方法を見る🔎
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const docs: { to: string, imgUrl: string, title: string, description: string }[] = [
    {
      to: "/beginners/intro",
      imgUrl: useBaseUrl("/img/beginners.png"),
      title: "Beginners",
      description: "パソコンの基礎知識・用語集"
    },
    {
      to: "/unity-docs/intro",
      imgUrl: useBaseUrl("/img/unity.png"),
      title: "Unity",
      description: "Unityを使ったゲーム開発"
    },
    {
      to: "/IT-docs/intro",
      imgUrl: useBaseUrl("/img/it.png"),
      title: "業務用ITソフトウェア・ソリューションズ",
      description: "JavaとDatabaseを使ったアプリ制作"
    },
    {
      to: "/beginners/intro",
      imgUrl: useBaseUrl("/img/web.png"),
      title: "Web Development",
      description: "WebサイトやWebアプリ制作"
    },
    {
      to: "/ET-docs/intro",
      imgUrl: useBaseUrl("/img/et.png"),
      title: "ETロボコン",
      description: "組込みソフトウェア開発"
    },
    {
      to: "/LEGO-docs/intro",
      imgUrl: useBaseUrl("/img/lego.png"),
      title: "LEGOロボット",
      description: "LEGOロボットで課題をクリアする競技"
    },
  ]

  return (
    <Layout title="Home" description="">
      <HomepageHeader />
      <main>
        <div className={styles.docs}>
          {docs.map(doc => (
            <DocumentCard
              to={doc.to}
              icon={doc.imgUrl}
              title={doc.title}
              description={doc.description}
            >
            </DocumentCard>
          ))}
        </div>
      </main>
    </Layout>
  );
}
