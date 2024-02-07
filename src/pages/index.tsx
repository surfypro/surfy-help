import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import { Youtube } from '../components/videos/Youtube';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Voir les tutoriels
          </Link>
        </div>
        <div className='hero__subtitle' style={{ marginTop: 16 }}>

        <Youtube code="BRBaZOa-lQo"/> <br />

          <p>

            Bienvenue à la Surfy Academy<br />
            Vous trouverez ici notre guide utilisateur vous permettant de découvrir Surfy,<br />

            ou d'approfondir vos connaissances sur ses fonctionnalités en choisissant l'onglet "Tutoriels".<br />

            Pour découvrir l'historique des nouveautés choisissez l'onglet "Nouveautés"<br />

            Bon Surf(y) !
          </p>
        </div>
      </div>
      
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Welcome to Surfy Help home page">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
