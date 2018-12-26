export default function() {return {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.0.0-rc10.json',
  description: 'A simple bar chart with embedded data.',
  data: {
    values:[],
  },
  config: {
    "style": {
      "cell": {
        "stroke": "transparent"
      }
    },
    "padding": null,
    line: {
      strokeWidth: 0.8,
      interpolate: "basis"
    }
  },
  width: 100,
  height: 10,
  mark: 'tick',

  encoding: {
    x: {
      field: 'commit.timestamp',
      type: 'temporal',
      order: null,
      axis: null
    },
    order: null,
  }
}
}
