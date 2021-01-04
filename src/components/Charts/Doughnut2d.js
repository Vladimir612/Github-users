import React from 'react'

import ReactFC from 'react-fusioncharts'

import FusionCharts from 'fusioncharts'

import Doughnut2D from 'fusioncharts/fusioncharts.charts'

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy'

ReactFC.fcRoot(FusionCharts, Doughnut2D, FusionTheme)

const ChartComponent = ({ data }) => {
 const chartConfigs = {
  type: 'doughnut2d', // The chart type
  width: '100%', // Width of the chart
  height: '400', // Height of the chart
  dataFormat: 'json', // Data type
  dataSource: {
   chart: {
    caption: 'Stars Per Language',
    decimals: 0,
    doughnutRadius: '45%',
    showPercentValues: 0,
    theme: 'candy',
    bgColor: '#EED3DC',
    // paletteColors: '#e0fcff, #ffe0f0, #e6e699',
   },
   data: data,
  },
 }
 return <ReactFC {...chartConfigs} />
}

export default ChartComponent
