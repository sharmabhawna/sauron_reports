import React from "react";
const vega = require('vega');
const vl = require('vega-lite');

// create a new view instance for a given Vega JSON spec
let spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v3.0.0-rc10.json",
  "data": {
    "values": [
      {"a": "C", "b": 2}, {"a": "C", "b": 7}, {"a": "C", "b": 4},
      {"a": "D", "b": 1}, {"a": "D", "b": 2}, {"a": "D", "b": 6},
      {"a": "E", "b": 8}, {"a": "E", "b": 4}, {"a": "E", "b": 7}
    ]
  },
  "width": 100,
  "height": 100,
  "mark": "bar",
  "encoding": {
    "y": {"field": "a", "type": "nominal"},
    "x": {
      "aggregate": "average", "field": "b", "type": "quantitative",
      "axis": {
        "title": "Average of b"
      }
    }
  }
};
let actualSpec = vl.compile(spec).spec;
var view = new vega.View(vega.parse(actualSpec))
  .renderer('none')
  .initialize();

let actualSvg=""; 
view.toSVG()
  .then(function(svg) {
    console.log(svg);
    actualSvg = svg;
  })
  .catch(function(err) { console.error(err); })

export default (props) => <div dangerouslySetInnerHTML={{__html:actualSvg}}/>;