import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <header className="hero">
        <div className="container">
          <h1 className="hero__title">Bienvenue sur {siteConfig.title}</h1>
          <p className="hero__subtitle">
            {siteConfig.tagline}
          </p>
          <div>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Commencer 🚀
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="container margin-vert--xl">
          <div className="row">
            <div className="col col--4">
              <h2>📚 Ressources</h2>
              <p>Explore une collection de guides et de ressources utiles.</p>
            </div>
            <div className="col col--4">
              <h2>🛠️ Outils</h2>
              <p>Découvre des outils pratiques pour booster ta productivité.</p>
            </div>
            <div className="col col--4">
              <h2>🤝 Communauté</h2>
              <p>Rejoins notre communauté et échange avec d'autres passionnés.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
