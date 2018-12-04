import { connect } from 'react-redux';
import LinkComponent from '../component/LinkComponent';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {    
        onClick: ()=> {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const LinkFillter = connect(
    mapStateToProps,
    mapDispatchToProps
)(LinkComponent)


export default LinkFillter;