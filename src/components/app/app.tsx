import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../reducers/actions';
import { Wrapper } from '../wrapper/wrapper';

function mapStateToProps(state: any) {
  return {
    user: state.user,
    repos: state.repos,
    details: state.details,
    favourites: state.favourites,
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(actionCreators as any, dispatch);
}

export const App = connect(mapStateToProps, mapDispatchToProps)(Wrapper);
