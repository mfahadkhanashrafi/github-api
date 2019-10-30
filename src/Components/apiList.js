import React, { Component } from 'react';
import axios from 'axios';
import Search from "./search";
import '../App.css'

class ApiList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personData: [],
            personData2: [],
            userName: 'fahad',
            status: '',
            styleTrue1: false,
            styleTrue2: false
        };
    }

    hitFire() {

    }

    async setData2(data2) {
        await this.setState({ userName: data2 })
        axios.get(`https://api.github.com/users/${this.state.userName}`).then(res => {
            console.log(res.data, 'data2 res');
            this.setState({ personData2: res.data });
            console.log(this.state.personData2)
        }).catch(err => {
            alert(err);
        });
        this.setState({ status: true });
    }

    async setData(data) {
        console.log('getprops', data)
        await this.setState({ userName: data })
        axios.get(`https://api.github.com/users/${this.state.userName}`).then(res => {
            console.log(res.data);
            this.setState({ personData: res.data });
        }).catch(err => {
            alert(err)
        });
        this.setState({ status: true });
    }

    compare() {
        const dataOne = this.state.personData;
        const dataTwo = this.state.personData2;



        var userOneFollowers = dataOne.followers;
        var userOneRepos = dataOne.public_repos;
        var nameOne = dataOne.name;
        var urlOne = dataOne.html_url;

        var finalOne = userOneFollowers + userOneRepos;

        var userTwoFollowers = dataTwo.followers;
        var userTwoRepos = dataTwo.public_repos;
        var nameTwo = dataTwo.name;
        var urlTwo = dataTwo.html_url;

        var finalTwo = userTwoFollowers + userTwoRepos;

        var byFollowers = (finalOne > finalTwo ? nameOne : nameTwo);
        // var byRepos = (userOneFollowers > userTwoFollowers && userOneRepos > userTwoRepos? urlOne : urlTwo);

        if (finalOne > finalTwo) {
            this.setState({ status: 'Winner is User First ' + byFollowers + '\n Score is' + finalTwo });
            this.setState({ styleTrue1: true });
            console.log(byFollowers, finalOne, finalTwo, 'One');

        } else if (finalTwo > finalOne) {
            this.setState({ status: 'Winner is User Second  ' + byFollowers + '\n Score is' + finalTwo });
            this.setState({ styleTrue2: true });
            console.log(byFollowers, finalOne, finalTwo, 'Two');
        }

    }

    render() {
        var completed = 'col-md-6';
        var opp = '';
        var opp2 = '';
        if (this.state.styleTrue2 == true) {
            opp = ' opp';
            opp2 = '';
            console.log('T2' + this.state.styleTrue2 + ' t1' + this.state.styleTrue1);
        } else if (this.state.styleTrue1 == true) {
            opp2 = ' opp';
            opp = '';
            console.log('T2' + this.state.styleTrue2 + ' t1' + this.state.styleTrue1);
        }
        return (
            <div >
                <Search searchData={this.setData.bind(this)}
                    searchData2={this.setData2.bind(this)}
                />
                <hr />
                <div className='container'>
                    <div className='col-md-6'>
                        <h3 className='text-center'>User Detail One</h3>
                    </div>
                    <div className='col-md-6'>
                        <h3 className='text-center'>User Detail Two</h3>
                    </div>
                    <hr />
                </div>
                <h1>{this.state.status}</h1>
                <div className="container">

                    <div className={completed + ' ' + opp} >
                        <div className="list-group">
                            <div className="list-group-item active">
                                <h4 className="list-group-item-heading">First User Information</h4>
                            </div>
                            <div href="#" className="list-group-item">
                                <img src={this.state.personData.avatar_url} width='75px' alt='Profile Image' />
                                <div>
                                    <h4 className="list-group-item-heading">Name: {this.state.personData.name}</h4>
                                    <p className="list-group-item">Location: {this.state.personData.location}</p>
                                    <p className="list-group-item">Bio: {this.state.personData.bio}</p>
                                    <p className="list-group-item">Followers: {this.state.personData.followers}</p>
                                    <p className="list-group-item">Following: {this.state.personData.following}</p>
                                    <p className="list-group-item">Public Resopitory: {this.state.personData.public_repos}</p>
                                    <p className="list-group-item">GitHub Link:<a href={this.state.personData.html_url}> {this.state.personData.html_url}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={completed + ' ' + opp2}>
                        <div className="list-group">
                            <div className="list-group-item active">
                                <h4 className="list-group-item-heading">Second User Information</h4>
                            </div>
                            <div className="list-group-item">
                                <img src={this.state.personData2.avatar_url} width='75px' alt='Profile Image' />
                                <div>
                                    <h4 className="list-group-item-heading">Name: {this.state.personData2.name}</h4>
                                    <p className="list-group-item">Location: {this.state.personData2.location}</p>
                                    <p className="list-group-item">Bio: {this.state.personData2.bio}</p>
                                    <p className="list-group-item">Followers: {this.state.personData2.followers}</p>
                                    <p className="list-group-item">Following: {this.state.personData2.following}</p>
                                    <p className="list-group-item">Public Resopitory: {this.state.personData2.public_repos}</p>
                                    <p className="list-group-item">GitHub Link:<a href={this.state.personData2.html_url}> {this.state.personData2.html_url}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <button className='btn btn-success btn-lg' onClick={this.compare.bind(this)}>Compare</button>
            </div>
        );
    }
}

const divStyle = { opacity: 0.5 }

export default ApiList;
