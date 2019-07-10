import React, { Component } from 'react'
import JSONEditor from 'jsoneditor'
require('jsoneditor/dist/jsoneditor.min.css')
// require('jsoneditor/dist/img/jsoneditor-icons.svg')
class JSONData extends Component {
    constructor (props) {
        super(props)
        this.state = {
            jsonAfter: '', // 转化后的json字符串
            jsonBefore: '' // 转化前的json字符串
        }
    }

    componentWillMount () {}

    componentDidMount () {
        let container = document.getElementById('jsoneditor')
        let options = {}
        let editor = new JSONEditor(container, options)

        // set json
        let json = {
            "Array": [1, 2, 3],
            "Boolean": true,
            "Null": null,
            "Number": 123,
            "Object": {"a": 1, "b": "lala"},
            "String": "Hello World"
        }
        editor.set(json)

        let json2 = editor.get()
        console.log('json2', json2 )
    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate (prevProps, prevState) {}

    componentWillUnmount () {}
    /*
    // react生命周期中没有这个函数
    componentDidUnmount () {}
    */
    jsonBeforeChange (e) {
        this.setState({
            jsonBefore: e.target.value,
        })
        try {
            if (typeof JSON.parse(e.target.value) === 'object') {
                this.setState({jsonAfter: FormatJson(e.target.value)})
            }
        } catch (error) {
            throw new Error('不能转化成json')
        }

    }

    render () {
        return (
            <div className="json-data">
                <div className="title">
                    数据
                </div>
                <div className="content">
                    <div id="jsoneditor">

                    </div>
                </div>
            </div>
        )
    }
}

export default JSONData