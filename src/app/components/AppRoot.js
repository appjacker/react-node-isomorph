import React from 'react/addons';
import Cart from './Cart';

import config from '../../../config/app';

/*
 * @class AppRoot
 * @extends React.Component
 */
 class AppRoot extends React.Component {
  

    /*
   * AppRootly PureRenderMixin
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
   shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  /*
   * @method render
   * @returns {JSX}
   */
   render () {
    return <div className="appRoot">
    <h1>{config.title}</h1>
    <button className="pull-right" type="button" onClick={this.clearCart}>Clear Cart</button>
    <Cart cart={this.props.state.cart} />

    </div>;
  }


  clearCart () {
    console.log("removing");
    console.log(document.getElementsByClassName('cart'));
    React.unmountComponentAtNode(document.getElementsByClassName('cart')[0]);
  }
}

// Prop types validation
AppRoot.propTypes = {
  state: React.PropTypes.object.isRequired,
};

export default AppRoot;
