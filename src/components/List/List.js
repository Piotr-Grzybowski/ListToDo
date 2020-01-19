import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.string,
  }
  static defaultProps = {
    children: <p>I could <em>probably</em> do all the things, but why should I start now?</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} />
        <div className={styles.description}>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default List;
