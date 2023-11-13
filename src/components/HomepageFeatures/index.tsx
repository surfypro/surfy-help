import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Découvrez nos vidéos',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate>
        Description 1
      </Translate>
    ),
  },
  {
    title: 'Focus on What Matters',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate>
        Description 2
      </Translate>
    ),
  },
  {
    title: 'Powered by React',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate>
        Description 3
      </Translate>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><Translate>{title}</Translate></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
