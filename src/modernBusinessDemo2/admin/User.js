import React, { Component } from 'react';

class User extends Component {      /**Đầu tiên, viết các hiệu ứng tương tác để xử lý nhanh trên front end */
    constructor(props) {
        super(props);
        this.state={
            displayStatus: true,     /**trạng thái hiển thị lúc đầu =true */
            id: this.props.user.id,
            formname: this.props.user.username,
            formemail: this.props.user.email,
            formauthority: this.props.user.authority,
            formisdelete: this.props.user.isdelete,
        }
    }


    
    isChange=(event)=>{/*lấy data từ input, và lưu vào state với trường targetName=<name của input>*/
        var targetName = event.target.name; /**và trường targetValue= <zá trị nhập vào input>.*/
        var targetValue= event.target.value;
        this.setState({[targetName]: targetValue}); 
    } 



    displayListUser =(infoUser, type, name)=>{
        if (type==="text") 
            if (this.state.displayStatus===true) /**nếu displayStatus=true thì hiển thị thôngtinUser, =false thì mở input ra*/
                return <div>{infoUser}</div>;/* Phần hiển thị khối input*/
            else return(                     /* phần chỉnh sửa khối input*/
                <div><input type={type} className="form-control form-control-sm" defaultValue={infoUser} name={name}
                            onChange={(event) => this.isChange(event)}/>
                </div>)
        else 
            if (this.state.displayStatus===true) 
                return( /**nếu displayStatus=true thì hiển thị button pencil, =false thì hiển thị button (dấu tích) và close*/
                    <div>                  {/* phần hiển thị khối button*/}
                        <button className="btn btn-outline-warning" style={{border: 'white'}} 
                                onClick={()=>{
                                    this.setState({displayStatus:false});
                                    // this.props.updateUser();/**khi click vào btn pencil thì từ component cháu truyền đến*/
                                }}>{/*component con, và từ component con truyền đến componet cha để gọi function updateUser*/}
                            <i className="fas fa-pencil-alt" />
                        </button>           {/**nhấn vào Button pencil thì thay đổi trạng thái displayStatus từ true sang false.*/}

                        <button className="btn btn-outline-secondary" style={{border: 'white'}} /**___CHỨC NĂNG DELETE__*/
                                onClick={()=>{
                                              var userUpdate={username:this.props.user.username,/**sau khi lấy đc zá trị của*/
                                                            email:this.props.user.email,        /**các trường input nhập vào,*/
                                                            authority:this.props.user.authority,/**tiến hành đống gói thành 1*/
                                                            isdelete:"1",                       /**đối tượng để truyền qua*/
                                                            datecreate: this.props.user.datecreate, /**component cha thông*/
                                                            id: this.props.user.id}             /**qua component getNewUser*/
                                                this.props.updateUser(userUpdate);
                                                this.setState({displayStatus:false}); this.setState({displayStatus:true})         
                                            }}> {/**khi click vào btn pencil thì từ component cháu truyền đến*/}
                            <i className="fas fa-trash"></i>
                        </button> 
                    </div>
                )
            else return(
                <div >                      {/* phần chỉnh sửa khối button*/}
                    <button className="d-none"><i className="fas fa-check" /></button>
                    <button className="btn btn-outline-success m-r-2" style={{border: 'white'}} 
                        onClick={()=>{
                            this.setState({displayStatus:true})
                            var userUpdate={username:this.state.formname,      /**sau khi lấy đc zá trị của các trường input*/
                                            email:this.state.formemail,        /**nhập vào, tiến hành đống gói thành 1 đối */
                                            authority:this.state.formauthority,/**tượng để truyền qua component cha thông qua*/
                                            isdelete:this.state.formisdelete,  /**component getNewUser */
                                            datecreate: this.props.user.datecreate,
                                            id: this.props.user.id}
                            // console.log(userUpdate);
                            this.props.updateUser(userUpdate);  /**khi click vào btn pencil thì từ component cháu truyền đến*/
                        }}> {/*component con, và từ component con truyền đến componet cha để gọi function updateUser*/}
                        <i className="fas fa-check" />
                    </button>               {/**nhấn vào Button (dấu tích) thì thay đổi trạng thái displayStatus từ false sang true.*/}
                    <button className="btn btn-outline-secondary" style={{border: 'white'}} onClick={()=>{this.setState({displayStatus:true})}}>
                        <i className="fas fa-times" />
                    </button>               {/**nhấn vào Button close thì thay đổi trạng thái displayStatus từ false sang true.*/}
                </div>
            )
    }
    
    displayAuthority=(name)=>{
        var authority = this.props.user.authority==="0" ? "User" : (this.props.user.authority==="1" ? "Admin" : "Mod");
        var isdelete = this.props.user.isdelete==="0" ? "Using" : "Deleted";
        if (this.state.displayStatus===true) /**nếu displayStatus=true thì hiển thị thôngtinUser, =false thì mở input ra*/
            if(name==="formauthority") return <div>{authority}</div>;/* Phần hiển thị khối input*/
            else return <div>{isdelete}</div>;
        else 
            if(name==="formauthority")  return(
                    <div className="form-group text-center col-sm-2">
                        <select className="custom-select" required defaultValue={this.props.user.authority}
                                onChange={(event)=>this.isChange(event)} name="formauthority" style={{width: '120px'}} >
                            <option value="0">User</option>
                            <option value="1">Admin</option>
                            <option value="2">Moderator</option>
                        </select>
                    </div> )
            else return( <div className="form-group text-center col-sm-2">
                        <select className="custom-select" required defaultValue={this.props.user.isdelete}
                                onChange={(event)=>this.isChange(event)} name="formisdelete" style={{width: '120px'}} >
                            <option value="0">Using</option>
                            <option value="1">Deleted</option>
                        </select>
                    </div> )
    }

    render() {     
        return (
            <tr> 
                <th scope="row">{this.props.index}</th>
                <td>{this.props.user.id}</td>
                <td>{this.displayListUser(this.props.user.username, "text", "formname")}</td>
                <td>{this.displayListUser(this.props.user.email, "text","formemail")}</td>
                <td>{this.props.user.datecreate}</td>
                <td>{this.displayAuthority("formauthority")}</td>
                <td>{this.displayAuthority("formisdelete")}</td>
                <td>{this.displayListUser(null, null)}</td>
            </tr>
        )
    }
}

export default User;