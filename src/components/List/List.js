import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
// import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
// import Creator from '../Creator/Creator';

class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    image: PropTypes.string,
    columns: PropTypes.array,
  }

  static defaultProps = {
    description: <p>I could <em>probably</em> do all the things, but why should I start now?</p>,
    image: 'https://i.postimg.cc/K8F31tCw/coffee-creative-notebook-office-64769.jpg',
  }

  render() {
    const {title, image, description, columns} = this.props;
    return (
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
        {/* <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
        </div> */}
      </section>
    );
  }
}

export default List;
