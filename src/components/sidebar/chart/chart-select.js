import React, { Component } from 'react'
require('./chart-select.less')

class ChartSelect extends Component{
    constructor (props) {
        // 图表类型
        super(props)
        this.state = {
         chartType: [
            {title: '线图', value: 'line'},
            {title: '柱图', value: 'bar'},
            {title: '饼图', value: 'pie'},
            {title: '区域图', value: 'area-chart'}
         ]
        }
    }

    selectChart (chart) {
        console.log('选择图表', chart)
    }

    render () {
        return (
            <div className="chart-select">
                <div className="title">
                    图表类型
                </div>
                <div className="chart-list">
                    {
                        this.state.chartType.map((item, index) => {
                            return (
                                <div
                                    title={item.title}
                                    className={`chart ${item.value}`}
                                    onClick={(e) => this.selectChart(item)}
                                    key={index}>
                                    <i className="icon"></i>
                                    {/*{item.name}*/}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ChartSelect