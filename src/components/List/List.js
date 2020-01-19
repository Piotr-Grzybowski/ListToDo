import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.string,
    img: PropTypes.string,
  }
  static defaultProps = {
    children: <p>I could <em>probably</em> do all the things, but why should I start now?</p>,
    img: "https://i.postimg.cc/K8F31tCw/coffee-creative-notebook-office-64769.jpg",
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} img={this.props.img} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title={'Column the First'} />
          <Column title={'Column the Second'} />
          <Column title={'Column the Last'} />
        </div>
      </section>
    )
  }
}

export default List;
