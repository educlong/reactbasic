import React, { Component } from 'react';
import { connect } from 'react-redux';

class FqaUpdateData extends Component {
    constructor(props) {
        super(props);
        this.state={
            usernamePostgreEditDemo2: this.props.user.username,
            emailPostgreEditDemo2: this.props.user.useremail,
        }
    }
    
    ischange=(event)=>{
        var nameTarget=event.target.name;
        var valueTarget=event.target.value;
        this.setState({[nameTarget]: valueTarget}); 
    }
    render() {
        if(this.props.isShowEdit===this.props.index)    /**Phần chỉnh sửa */
            return(
                <tbody>{/*đưa data từ Postgredb vào*/}
                    <tr className="updatePostgreHide">
                        <th scope="row">{this.props.index+1}</th>
                        <td>  {/*truyền id cần update vào aData._id, các name= kindPostgreEditDemo2 và titlePostgreEditDemo2 đc truyền qua portfolioDemo2 để update*/}
                            <input type="text" className="form-control" name="usernamePostgreEditDemo2" aria-describedby="helpId" placeholder="title" 
                                defaultValue={this.props.user.username} 
                                onChange={(event)=>this.ischange(event)}/>
                        </td>
                        <td><input type="email" className="form-control" name="emailPostgreEditDemo2" aria-describedby="helpId" placeholder="title" 
                                defaultValue={this.props.user.useremail}
                                onChange={(event)=>this.ischange(event)}/>
                        </td>
                        <td>{this.props.user.userpassword} </td>
                        <td>{this.props.user.userdatecreate} </td>
                        <td>{this.props.user.useradmin ? "admin" : "user"} </td>
                        <td>{this.props.user.isdelete ? "deleted" : "using"} </td>
                        <td className="row">
                            <button className="d-none"><i className="fas fa-check"/></button><button className="d-none"><i className="fas fa-check"/></button>
                            <button className="btn btn-primary btn-sm col-5 mr-1"
                                    onClick={()=>{
                                        if(this.state.usernamePostgreEditDemo2 && this.state.emailPostgreEditDemo2){
                                            this.props.UpdateFqaTodb({"username":this.state.usernamePostgreEditDemo2,
                                                                    "useremail":this.state.emailPostgreEditDemo2,
                                                                    "__id":this.props.user.id})
                                            this.props.allowAdd()   /**từ FQADemo2 truyền qua đây để đổi trạng thái của flag trong FQADemo2*/
                                        }
                                        this.props.userAllow(-1)
                                    }}>
                                <i className="fas fa-check"/> 
                            </button>
                            <button className="btn btn-secondary btn-sm col-5"
                                    onClick={()=>{ this.props.userAllow(-1) }}>
                                <i className="far fa-window-close"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>);
        else
            return (/*_______________VIEW ĐỂ SELECT DATA TỪ POSTGRESQL _____________________*/
                <tbody>{/*đưa data từ Postgredb vào*/}
                    <tr className="updatePostgreUnhide">
                        <th scope="row">{this.props.index+1}</th>
                        <td>{this.props.user.username}</td>
                        <td>{this.props.user.useremail} </td>
                        <td>{this.props.user.userpassword} </td>
                        <td>{this.props.user.userdatecreate} </td>
                        <td>{this.props.user.useradmin ? "admin" : "user"} </td>
                        <td>{this.props.user.isdelete ? "deleted" : "using"} </td>
                        <td className="row"> 
                            <button className="btn btn-warning btn-sm col-5 mr-1"
                                    onClick={()=>{this.props.userAllow(this.props.index)}}>
                                <i className="fa fa-edit fs-xs" /> 
                            </button>
                            <button className="btn btn-danger btn-sm col-5 ml-1"
                                    onClick={()=>{
                                        this.props.DeleteFqaToDb({"__id__": this.props.user.id})
                                        this.props.allowAdd()   /**từ FQADemo2 truyền qua đây để đổi trạng thái của flag trong FQADemo2*/
                                        this.props.userAllow(-1)
                                    }}>
                                <i className="fas fa-trash fa-xs"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isShowEdit: state.fQAReducer.isShowEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userAllow: (isShowEdit) => {
            dispatch({type:"DISPLAY_ROW_INDEX",isShowEdit})
        },
        UpdateFqaTodb: (newFqa) => {
            dispatch({type:"UPDATE_FQA_TO_DB",newFqa})
        },
        DeleteFqaToDb: (newFqa) => {
            dispatch({type:"DELETE_FQA_TO_DB",newFqa})
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FqaUpdateData)