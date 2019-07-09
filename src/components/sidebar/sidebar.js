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
            currentTab: 'chart-config'
        }
    }

    selectTab (type) {
        this.setState({
            currentTab: type
        })
        console.log(`选中${type}`)
    }

    render() {
        return (
            <div id="sidebar" className="sidebar">
                <div className="json-data-container">
                    <JSONData />
                </div>
                <div className="chart-select-container">
                    {/* 选择图表类型 */}
                    <ChartSelect/>
                </div>
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
                <div className="config-container">
                    <div className="chart-config-container">
                        {/* 图表属性 */}
                        <ChartConfig/>
                    </div>
                    <div className="chart-style-container">
                        {/* 图表样式 */}
                        <ChartStyle/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar