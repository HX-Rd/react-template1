import React, {
  useState,
} from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Background from '../UI/Background/Background';
import { connect } from 'react-redux';
import * as LayoutActions from './Layout.actions';
import { LayoutActionTypes } from './Layout.action.types';
import Loader from '../UI/Loader/Loader';

interface LayoutProps {

}

interface StateProps {
  loadingBackground: boolean
}

interface DispatchProps {
    onLoadingBackground: () => void
    onLoadingBackgroundSuccess: () => void
}

type Props = LayoutProps & StateProps & DispatchProps

const Layout: React.FC<Props> = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(prevState => !prevState);
  }
  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  }

  const content = props.loadingBackground 
    ? <Loader/>
    : props.children

  return (
    <>
      <Toolbar
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <main className={classes.Layout}>
        <Background
          backgrounds={[
            'linear-gradient(rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 1) 90%)',
            'url(https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=2091&q=80)',
          ]}
          loadStart={() => props.onLoadingBackground()}
          loadEnd={() => props.onLoadingBackgroundSuccess()}
          />
        {content}
      </main>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    loadingBackground: state.layout.loadingBackground
  }
}

const mapDispatchToProps = (dispatch: (action:LayoutActionTypes) => any) => {
  return {
    onLoadingBackground: () => dispatch(LayoutActions.backgroundLoad()),
    onLoadingBackgroundSuccess: () => dispatch(LayoutActions.backgroundLoadSuccess())
  }
}

export default connect<StateProps, DispatchProps, LayoutProps>(mapStateToProps, mapDispatchToProps)(Layout)
