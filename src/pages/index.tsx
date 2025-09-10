// @ts-nocheck
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import { Youtube } from '../components/videos/Youtube';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{isEnglish ? "Surfy Academy" : siteConfig.title}</h1>
        <p className="hero__subtitle">{isEnglish ? "Welcome to the Surfy user training site!" : siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button homebutton button--secondary button--lg"
            to={isEnglish ? "/en/docs/tutorials/intro" : "/docs/tutorials/intro"}>
            {isEnglish ? "View tutorials" : "Voir les tutoriels"}
          </Link>
          <Link
            className="button homebutton button--secondary button--lg"
            to={isEnglish ? "/en/docs/courses/intro" : "/docs/courses/intro"}>
            {isEnglish ? "View courses" : "Voir les cours"}
          </Link>
        </div>
        <div className='hero__subtitle' style={{ marginTop: 16 }}>

          <Youtube code="yRuMK5xBrWU" /> <br />

          <p>
            {isEnglish ? (
              <>
                Our user guide allows you to master Surfy:<br />
                To discover or deepen a particular functionality, choose the <Link className="home" to="/en/docs/tutorials/intro">"Tutorials"</Link> tab.<br />
                To follow a Surfy course on a global topic, guided by a logical sequence of tutorials, choose the <Link className="home" to="/en/docs/courses/intro">"Courses"</Link> tab.<br />
                To discover the history of new features, choose the <Link className="home" to="/en/changelog/app">"What's New"</Link> tab.<br />
                Happy Surf(y)ing!
              </>
            ) : (
              <>
                Notre guide utilisateur vous permet de maîtriser Surfy :<br />
                En découvrant ou approfondissant une fonctionnalité particulière, choisissez l'onglet <Link className="home" to="/docs/tutorials/intro">"Tutoriels"</Link>.<br />
                En suivant un cours Surfy sur un sujet global, guidé par une suite logique de tutoriels, choisissez l'onglet <Link className="home" to="/docs/courses/intro">"Cours"</Link>.<br />
                Pour découvrir l'historique des nouveautés choisissez l'onglet <Link className="home" to="/changelog/app">"Nouveautés"</Link>.<br />
                Bon Surf(y) !
              </>
            )}
          </p>
        </div>
      </div>

    </header>
  );
}

export default function Home(): React.ReactElement {
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
