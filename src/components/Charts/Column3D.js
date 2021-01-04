import React from 'react'

import ReactFC from 'react-fusioncharts'

import FusionCharts from 'fusioncharts'

import Column3D from 'fusioncharts/fusioncharts.charts'

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

ReactFC.fcRoot(FusionCharts, Column3D, FusionTheme)

const ChartComponent = ({ data }) => {
 const chartConfigs = {
  type: 'column3d', // The chart type
  width: '100%', // Width of the chart
  height: '400', // Height of the chart
  dataFormat: 'json', // Data type
  dataSource: {
   chart: {
    caption: 'Most Popular',
    yAxisName: 'Stars',
    xAxisName: 'Repos',
    xAxisNameFontSize: '16px',
    yAxisNameFontSize: '16px',
    xAxisNameFontColor: '#633563',
    yAxisNameFontColor: '#633563',
    theme: 'fusion',
    bgColor: '#EED3DC',
    paletteColors: '#9DC5BB, #17B890, #FF3A20, #FCBCB8, #5F00BA',
   },
   data: data,
  },
 }
 return <ReactFC {...chartConfigs} />
}

export default ChartComponent
