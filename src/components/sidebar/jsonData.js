import React, { Component } from 'react'
import JSONEditor from 'jsoneditor'
require('jsoneditor/dist/jsoneditor.min.css')
require('./jsonData.less')
// require('jsoneditor/dist/img/jsoneditor-icons.svg')
class JSONData extends Component {
    constructor (props) {
        super(props)
        this.editor = undefined // json编辑器
        this.state = {
        }
    }

    handleChartDataChange (json) {
        console.log('jsonData.js handleChartDataChange', json)
        let jsonObj = {}
        try {
            jsonObj = JSON.parse(json)
            this.props.handleChartDataChange(jsonObj)
        } catch (error) {
            console.error(error)
            throw new Error(error.toString())
        }
    }

    componentWillMount () {}

    componentDidMount () {
       this.initEditor()
    }

    componentDidUpdate () {
        console.log('jsonData.js componentDidUpdate')
        this.initEditor()
    }

    initEditor () {
        if (!this.editor || typeof this.editor !== 'object') {
            let container = document.getElementById('jsoneditor')
            let options = {
                mode: 'code', // tree(default),'view' => 只读, 'form' => key只读，value可变, 'code' => 以字符串显示，并且有关键字颜色变化, 'text' => 以字符串显示
                // onChangeJSON: (json) => this.props.handleChartDataChange(json), // 只能在tree,form, view时使用
                onChangeText: (json) => this.handleChartDataChange(json)
            }
            this.editor = new JSONEditor(container, options)
        }
        // set json
        let data = []
        if (this.props.chartData && this.props.chartData.length > 0) {
            data = this.props.chartData
        } else {
            data = []
        }
        this.editor.set(data)

    }

    componentWillUpdate(nextProps, nextState) {}

    componentWillUnmount () {}
    /*
    // react生命周期中没有这个函数
    componentDidUnmount () {}
    */

    render () {
        return (
            <div className="json-data">
                {/*<div className="title">*/}
                    {/*数据*/}
                {/*</div>*/}
                <div className="content">
                    <div id="jsoneditor">

                    </div>
                </div>
            </div>
        )
    }
}

export default JSONData