export default function() {return {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.0.0-rc10.json',
  description: 'A simple bar chart with embedded data.',
  data: {
    values:[],
  },
  transform: [
    { "calculate":"100*(datum.job.results.testResult.passed.length/datum.job.results.testResult.total)", as:"passPercent"}
  ],
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
  height: 12,
  mark: 'line',
  encoding: {
    x: {
      field: 'commit.id',
      type: 'nominal',
      sort: null,
      axis: { labels: false, ticks: false, title: null, domainOpacity: 0.1, minExtent: 0}
    },
    order: {value: null},
    y: {
      field: 'passPercent',
      type: 'quantitative',
      axis: {grid: true, labels:false, title: false, ticks: false, domainOpacity: 0.1, minExtent: 0},
      scale: {
        domain: [0,100]
      }
    }
  }
}
}
