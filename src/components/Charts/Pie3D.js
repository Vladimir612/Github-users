import React from 'react'

import ReactFC from 'react-fusioncharts'

import FusionCharts from 'fusioncharts'

import Pie3D from 'fusioncharts/fusioncharts.charts'

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

ReactFC.fcRoot(FusionCharts, Pie3D, FusionTheme)

const ChartComponent = ({ data }) => {
 const chartConfigs = {
  type: 'pie3d', // The chart type
  width: '100%', // Width of the chart
  height: '400', // Height of the chart
  dataFormat: 'json', // Data type
  dataSource: {
   chart: {
    caption: 'Languages',
    theme: 'fusion',
    decimals: 0,
    pieRadius: '35%',
    bgColor: '#EED3DC',
    // paletteColors: '#e0fcff, #ffe0f0, #e6e699',
   },
   data: data,
  },
 }
 return <ReactFC {...chartConfigs} />
}

export default ChartComponent
