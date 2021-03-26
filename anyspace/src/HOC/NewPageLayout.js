import React, { Component } from 'react';
import NewHeader from '../Components/NewHeader';
import NewFooter from '../Components/NewFooter';

export default function (ComposedComponent) {
  const container = {
    width: '100%'
  }
  class NewPageLayout extends Component {

    render() {
      return (
        <React.Fragment>
          {window.scrollTo(0, 0)}
          <NewHeader/>
          <main className="conainer" style={container}>
            <ComposedComponent {...this.props} />
          </main>
          <NewFooter/>
        </React.Fragment>
      )

    }

  }
  return NewPageLayout;
}
