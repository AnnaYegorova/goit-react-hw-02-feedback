import propTypes from 'prop-types';
import { Component } from 'react';
import { SectionTitle } from './Section.styled';
export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </>
    );
  }
}

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};
