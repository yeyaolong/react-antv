import React, { Component } from 'react'
import { FormatJson } from '../../assets/util'
class JSONData extends Component {
    constructor (props) {
        super(props)
        this.state = {
            jsonAfter: '', // 转化后的json字符串
            jsonBefore: '' // 转化前的json字符串
        }
    }

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
                    <textarea value={this.state.jsonBefore} onChange={(e) => this.jsonBeforeChange(e)}></textarea>
                    <pre className="show" id="showJSONData">
                        {this.state.jsonAfter}
                    </pre>
                    <div className="btn submit">
                        转化
                    </div>
                </div>
            </div>
        )
    }
}

export default JSONData