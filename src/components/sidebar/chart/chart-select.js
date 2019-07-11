import React, { Component } from 'react'
require('./chart-select.less')

class ChartSelect extends Component{
    constructor (props) {
        // 图表类型
        super(props)
        this.state = {
             chartType: [
                 {
                     title: '柱图',
                     value: 'bar',
                     defaultChartData: [
                         {genre: 'Sports', sold: 275},
                         {genre: 'Strategy', sold: 115},
                         {genre: 'Action', sold: 120},
                         {genre: 'Shooter', sold: 350},
                         {genre: 'Other', sold: 150}
                     ]
                 },
                 {
                     title: '线图',
                     value: 'line',
                     defaultChartData: [
                         {genre: 'Sports', sold: 2755},
                         {genre: 'Strategy', sold: 1315},
                         {genre: 'Action', sold: 1210},
                         {genre: 'Shooter', sold: 3150},
                         {genre: 'Other', sold: 150}
                     ]
                 },
                 {
                     title: '区域图',
                     value: 'area-chart',
                     defaultChartData: []
                 },
                 {
                     title: '饼图',
                     value: 'pie',
                     defaultChartData: []
                 }
             ],
            currentSelected: 0
        }
    }

    selectChart (chart, index) {
        this.setState({
            currentSelected: index
        })
        this.props.handleChartSelectChange(chart)
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
                                    className={`chart ${item.value} ${this.state.currentSelected === index ? 'selected' : null}`}
                                    onClick={(e) => this.selectChart(item, index)}
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