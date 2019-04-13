import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props;
    if (!allSlices) return null;
    const slice = allSlices.map((s, i) => {
      switch (s.slice_type) {
        
        default:
          console.warn(`No support for slice type ${s.slice_type}`);
          return null;
      }
    });
    return slice;
  }
}

SliceZone.propTypes = {
  allSlices: PropTypes.array.isRequired,
};
