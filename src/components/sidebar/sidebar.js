import React, { Component } from 'react'
import JSONData from './jsonData'
import ChartSelect from './chart/chart-select'
import ChartConfig from './chart/chart-config'
import ChartStyle from './chart/chart-style'

require('./sidebar.less')

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 'chart-config',
            chartSelect: {}, // 图表类型
            chartConfig: {}, // 图表属性
            chartStyle: {}, // 图表样式
            chartData: {} // 图表数据
        }
    }

    selectTab (type) {
        this.setState({
            currentTab: type
        })
        console.log(`选中${type}`)
    }

    componentWillUpdate (nextProps, nextState) {}

    componentDidUpdate (prevProps, prevState) {
        // 相当于 监听了props和state的变化（参考react生命周期）。只要props和state变化就会调用componentDidUpdate方法
        // this.handleConfigChange()
    }

    handleChartDataChange (params) {
        console.log('sidebar.js handleChartDataChange', params)
        this.props.handleChartDataChange(params)
    }

    handleChartSelectChange (chart) {
        this.setState({
            chartSelect: chart,
            chartData: chart.defaultChartData
        })
       this.props.handleChartSelectChange(chart)
    }

    handleChartConfigChange (params) {
        console.log('sidebar.js handleChartConfigChange', params)
    }

    handleChartStyleChange (params) {
        console.log('sidebar.js handleChartStyleChange', params)
    }

    render() {
        return (
            <div id="sidebar" className="sidebar">
                <div className="chart-config-container">
                    <div className="chart-select-container">
                        {/* 选择图表类型 */}
                        <ChartSelect handleChartSelectChange={(params) => this.handleChartSelectChange(params)}/>
                    </div>
                    <div className="config-container">
                        <div className="tab-container">
                            <div
                                className={`tab chart-config-tab ${this.state.currentTab === 'chart-config' ? 'select' : null}`}
                                onClick={(e) => this.selectTab('chart-config')}
                            >
                                图表属性
                            </div>
                            <div
                                className={`tab chart-style-tab ${this.state.currentTab === 'chart-style' ? 'select' : null}`}
                                onClick={(e) => this.selectTab('chart-style')}
                            >
                                图表样式
                            </div>
                        </div>
                        <div className="config-content">
                            <div className="chart-config-container">
                                {/* 图表属性 */}
                                <ChartConfig handleChartConfigChange={(params) => this.handleChartConfigChange(params)}/>
                            </div>
                            <div className="chart-style-container">
                                {/* 图表样式 */}
                                <ChartStyle handleChartStyleChange={(params) => this.handleChartStyleChange(params)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="json-data-container">
                    <JSONData
                        chartData={this.state.chartData}
                        handleChartDataChange={(params) => this.handleChartDataChange(params)}
                    />
                </div>
            </div>
        )
    }
}

export default Sidebar