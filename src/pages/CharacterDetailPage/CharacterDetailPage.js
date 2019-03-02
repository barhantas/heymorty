import React from 'react';
import { connect } from 'react-redux';

class CharacterDetailPage extends React.Component {
  render() {
    return <div className="my-page-layout">CharacterDetailPage</div>;
  }
}

CharacterDetailPage.propTypes = {};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetailPage);
