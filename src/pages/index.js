import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">База знаний</Heading>
                <p className="hero__subtitle">База знаний и регламенты</p>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/docs/SHOPBASE">
                        Перейти к документации
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const imgUrl = useBaseUrl('/img/ibm-room.jpg'); // файл лежит в static/img/ibm-room.jpg

    return (
        <Layout title="Вики компании" description="База знаний">

            <HomepageHeader />
            <main className={styles.main}>
                <img src={imgUrl} alt="Исторический компьютерный зал" className={styles.heroImage} />
            </main>
        </Layout>
    );
}
