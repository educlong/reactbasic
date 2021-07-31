import React, { Component } from 'react';

/**add thêm module uuid để tạo ra 1 id random ngẫu nhiên. Chú ý module này phải import sau khi đã import hết data*/
import { v4 as uuidv4 } from 'uuid';/**VD data User.json phải đc import trước, rồi sau đó mới đến module uuid */

class UserAdd extends Component {   /**Đầu tiên, viết các hiệu ứng tương tác để xử lý nhanh trên front end */
    constructor(props) {
        super(props);
        this.state={
            displayStatus: true, /**trạng thái hiển thị lúc đầu =true */
            formname : "",
            formselect: "0"
        }
    }
    
    isChange=(event)=>{/*lấy data từ input, và lưu vào state với trường targetName=<name của input>*/
        var targetName = event.target.name; /**và trường targetValue= <zá trị nhập vào input>.*/
        var targetValue= event.target.value;
        this.setState({[targetName]: targetValue}); 
    } 


    displayAddUser = ()=>{
        if (this.state.displayStatus === true) /**nếu displayStatus=true thì hiển thị nút Add User, =false thì mở danh sách ra */
                return <div className="btn btn-block btn-info col-sm-2 push-sm-10" 
                    onClick={()=>{
                        this.setState({displayStatus: false});
                        this.props.searchAllow(); /**truyền function từ AdminUser.js (component cha vào component con)*/
                    }}>Add User</div>;
        else    return(    /**nhấn vào Add User thì thay đổi trạng thái displayStatus từ false sang true. */
                <form className="row">
                    <h5>Add User</h5>
                    <div className="form-group col-sm-3">
                        <div className="col-xs-10">
                            <input className="form-control" type="text" placeholder="Username: Artisanal kale" id="example-text-input" 
                                    onChange={(event) => this.isChange(event)} name="formname"/>
                        </div>
                    </div>
                    <div className="form-group col-sm-3">
                        <div className="col-xs-10">
                            <input className="form-control" type="email" placeholder="Email: bootstrap@mail.com" id="example-email-input"
                                    onChange={(event) => this.isChange(event) } name="email"/>
                        </div>
                    </div>
                    <div className="form-group col-sm-2">
                        <div className="col-xs-10">
                            <input className="form-control" type="password" id="example-password-input" placeholder="Password: abc123"
                                    onChange={(event) => this.isChange(event) } name="password"/>  
                        </div>
                    </div>
                    <div className="form-group text-center col-sm-2">
                        <select className="custom-select" required defaultValue="0"
                                onChange={(event)=>this.isChange(event)} name="formselect">

                            <option value="0">Authority</option>
                            <option value="1">Admin</option>
                            <option value="2">Moderator</option>
                            <option value="0">User</option>
                        </select>
                    </div>
                    <div className="text-center col-sm-1">
                        <input type="reset" className="btn btn-primary" value="Add"
                            onClick={()=>{
                                // console.log(this.state.email);
                                // this.setState({displayStatus: true});
                                // this.props.searchAllow(); /**truyền function từ AdminUser.js (component cha vào component con)*/

                                var userAdded = {id:uuidv4(), /*Tạo 1 id ramdom ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'*/
                                                username:this.state.formname,   /**sau khi lấy đc zá trị của các trường input*/
                                                email:this.state.email,         /**nhập vào, tiến hành đống gói thành 1 đối */
                                                datecreate:this.state.password, /**tượng để truyền qua component cha thông qua*/
                                                authority:this.state.formselect,/**component getNewUser */
                                                isdelete: "0"}
                                this.props.getNewUser(userAdded);
                                userAdded ={id:"",username:"",email:"",datecreate:"",authority:""};
                            }}/>
                            {/* <i className="fas fa-check" />*nhấn vào button thì thay đổi trạng thái displayStatus từ true sang false */}
                    </div>
                    <div className="text-center col-sm-1">
                        <button className="btn btn-secondary" style={{border: 'white'}} 
                            onClick={()=>{
                                this.setState({displayStatus: true});
                                this.props.searchAllow(); /**truyền function từ AdminUser.js (component cha vào component con)*/
                            }}>
                            <i className="fas fa-times" />{/**nhấn vào button thì thay đổi trạng thái displayStatus từ true sang false*/}
                        </button>
                    </div>
                </form>
            )
    }

    
    render() {
        // console.log(this.state);
        return (
            <div className="card-block container">
                {this.displayAddUser()}
            </div>
        )
    }
}

export default UserAdd;