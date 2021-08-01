import React, { Component } from 'react';
import User from './User';

class UserList extends Component {  
    render() {
        return (
            <table className="table table-hover table-striped" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Authority</th>
                        <th>Delete</th>
                        <th style={{width: '100px'}}>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.users.map((user,key)=>{  /**cho vòng for (map) chạy trong UserList và in data ra*/
                            return(/*đưa data của 1 user vào component cháu*/
                                <User user={user} key={key} index={key} updateUser={(userUpdate)=>this.props.updateUser(userUpdate)}/>   
                            )/*từ componet con truyền updateUser đến component cháu User.js để thựchiện update user*/
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default UserList;