import React, { Component } from 'react'
let G2 = require('g2')
require('./chart-content.less')
class ChartContent extends Component {
    constructor (props) {
        super(props)
        this.state = {}
        this.chart = undefined
    }

    componentDidMount () {
        // this.renderChart()
    }

    componentDidUpdate (prevProps, prevState) {
        console.log('chart-content.js componentDidUpdate')
        this.renderChart()
    }

    renderChart () {
        if (!this.chart) {
            this.chart = new G2.Chart({
                container: document.getElementsByClassName('chart-content')[0],
                width: 500,
                height: 300
            })
            this.chart.source(this.props.chartData, {
                genre: {
                    alias: '游戏种类', // 列定义，定义该属性显示的别名
                },
                sold: {
                    alias: '销售量'
                }
            });
            // 创建图形语法
            this.chart.interval().position('genre*sold').color('genre');
            // 渲染图表
            this.chart.render();
        } else {
            this.chart.source(this.props.chartData, {
                genre: {
                    alias: '游戏种类', // 列定义，定义该属性显示的别名
                },
                sold: {
                    alias: '销售量'
                }
            });
            // 创建图形语法
            this.chart.interval().position('genre*sold').color('genre');
            // 渲染图表
            this.chart.repaint();
        }



    }

    render () {

        return (
            <div className="chart-content">

            </div>
        )
    }

}

export default ChartContent