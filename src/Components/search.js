import React, { Component } from 'react';
import '../App.css'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 'Input Here'
        };
    }

    render() {
        return (

            <div className='container'>
                <div>
<div className='col-md-2'></div>
                    <div className="col-lg-8">
                        <div className="input-group">
                            <input type="text" className="form-control" ref='inputData' />
                            <span className="input-group-btn">
                              <button className="btn btn-default" onClick={this.getData.bind(this)}
                                      type="button">First Data</button>
                          </span>
                            <span className="input-group-btn">
                              <button className="btn btn-default" onClick={this.getData2.bind(this)} type="button">Second Data</button>
                          </span>
                            <span className="input-group-btn">
                              <button className="btn btn-danger" onClick={this.resetf.bind(this)} type="button">Reset</button>
                          </span>
                        </div>
                    </div>
                </div>
            </div>


        );
    }

    getData(e) {
        e.preventDefault();
        var data = this.refs.inputData.value;
        this.props.searchData(data);
        this.setState({val: data})
        console.log('search', data)
        this.refs.inputData.value = '';
    }

    getData2(e){
        e.preventDefault();
        var data = this.refs.inputData.value;
        this.props.searchData2(data);
        this.setState({val:data});
        this.refs.inputData.value = '';
        console.log(data,'Data2')
    }
    resetf(){
        document.location.reload(true)
    }


}
export  default Search;