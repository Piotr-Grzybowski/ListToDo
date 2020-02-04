import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';

const List = ({title, image, description, columns, addColumn}) => (
  <Container>
    <section className={styles.component}>
      <Hero titleText={title} image={image} />
      <div className={styles.description}>
        {ReactHtmlParser(description)}
      </div>
      <div className={styles.columns}>
        {columns.map(columnData => (
          <Column key={columnData.id} {...columnData} />
        ))}
      </div>
      <div className={styles.creator}>
        <Creator text={settings.columnCreatorText} action={addColumn} />
      </div>
    </section>
  </Container>
);

export default List;

List.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  image: PropTypes.string,
  columns: PropTypes.array,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: <p>I could <em>probably</em> do all the things, but why should I start now?</p>,
  image: 'https://i.postimg.cc/K8F31tCw/coffee-creative-notebook-office-64769.jpg',
};