import React from 'react'

import ReactFC from 'react-fusioncharts'

import FusionCharts from 'fusioncharts'

import Bar3D from 'fusioncharts/fusioncharts.charts'

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

ReactFC.fcRoot(FusionCharts, Bar3D, FusionTheme)

const ChartComponent = ({ data }) => {
 const chartConfigs = {
  type: 'bar3d', // The chart type
  width: '100%', // Width of the chart
  height: '400', // Height of the chart
  dataFormat: 'json', // Data type
  dataSource: {
   chart: {
    caption: 'Most Forked',
    yAxisName: 'Forks',
    xAxisName: 'Repos',
    xAxisNameFontSize: '16px',
    yAxisNameFontSize: '16px',
    theme: 'fusion',
    bgColor: '#EED3DC',
    xAxisNameFontColor: '#633563',
    yAxisNameFontColor: '#633563',
    paletteColors: '#9DC5BB, #17B890, #FF3A20, #FCBCB8, #5F00BA',
   },
   data: data,
  },
 }
 return <ReactFC {...chartConfigs} />
}

export default ChartComponent
