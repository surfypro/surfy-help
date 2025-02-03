import React, { JSX } from 'react';
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
            className="button homebutton button--secondary button--lg"
            to="/docs/tutorials/intro">
            Voir les tutoriels
          </Link>       
          <Link
            className="button homebutton button--secondary button--lg"
            to="/docs/courses/intro">
            Voir les cours
          </Link>          
        </div>
        <div className='hero__subtitle' style={{ marginTop: 16 }}>
          
          <Youtube code="T9C7k2dElBE" /> <br />

          <p>

            Notre guide utilisateur vous permet de maîtriser Surfy :<br />
            En découvrant ou approfondissant une fonctionnalité particulière, choisissez l'onglet <Link className="home" to="/docs/tutorials/intro">"Tutoriels"</Link>.<br />
            En suivant un cours Surfy sur un sujet global, guidé par une suite logique de tutoriels, choisissez l'onglet <Link className="home" to="/docs/courses/intro">"Cours"</Link>.<br />

            Pour découvrir l'historique des nouveautés choisissez l'onglet <Link className="home" to="/changelog/app">"Nouveautés"</Link>.<br />

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
