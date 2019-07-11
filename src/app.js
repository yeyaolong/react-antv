import React, { Component } from 'react'
import Sidebar from './components/sidebar/sidebar'
import ChartContent from './components/content/chart-content'
require('./app.less')
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: []
        }
    }

    handleChartDataChange (params) {
        // 数据改变
        console.log('app.js handleChartDataChange', params)
        this.setState({
            chartData: params
        })
    }

    handleChartSelectChange (chart) {
        // 图表类型改变
        this.setState({
            chartData: chart.defaultChartData
        })
    }

    render () {
        return (
            <div id="app">
                <div className="sidebar-container">
                    <Sidebar
                        handleChartDataChange={(params) => this.handleChartDataChange(params)}
                        handleChartSelectChange={(params) => this.handleChartSelectChange(params)}
                    />
                </div>
                <div className="chart-content-container">
                    <ChartContent chartData={this.state.chartData}/>
                </div>
            </div>
        )
    }
}

export default App