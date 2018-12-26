import React from "react";
const vl = require("vega-lite");
const vega = require('vega');

class VegaLite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {svg:""};
  }

  componentDidMount() {
    let actualSpec = vl.compile(this.props.spec).spec;
    var view = new vega.View(vega.parse(actualSpec))
      .renderer('none')
      .initialize();
    let thisObj = this;  
    view.toSVG()
      .then(function(svg) {
        console.log("SVG IS",svg);
        thisObj.setState({svg:svg});
      })
      .catch(function(err) { console.error(err); })
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html:this.state.svg}}></div>
    )
  }
}

export default VegaLite;