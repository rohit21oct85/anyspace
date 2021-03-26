import React from 'react';

export default class Ads extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className="adsbygoogle"
        style={{display:"block"}}
        data-ad-client="ca-pub-6745019229678089"
        data-ad-slot="6069412152"
        data-ad-format="auto"
        data-full-width-responsive="true"/>
    );
  }
}
