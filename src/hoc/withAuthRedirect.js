import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props}/>
        }
    }


    // коннектим чтобы в компонентах постоянно не прокидывать isAuth: state.auth.isAuth
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
};

export default withAuthRedirect;