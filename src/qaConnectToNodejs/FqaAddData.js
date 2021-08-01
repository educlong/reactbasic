import React, { Component } from 'react';
import {connect} from 'react-redux' /**Chú ý để kết nối cần import connect vs store ra */

class FqaAddData extends Component {
    constructor(props) {
        super(props);
        this.state={
            usernamePostgresqlDemo2: "",
            emailPostgresqlDemo2: "",
            passwordPostgresqlDemo2: ""
        }
    }
    
    ischange=(event)=>{
        var nameTarget=event.target.name;
        var valueTarget=event.target.value;
        this.setState({[nameTarget]: valueTarget}); 
    }
    render() {
        return (
            /*_______________ KHỐI XỬ LÝ KẾT NỐI DATABASE POSTGRESQL VÀ INSERT DATA VÀ POSTGRESQL______________ */
            <div> 
                <hr /><h3>KHỐI XỬ LÝ KẾT NỐI DATABASE POSTGRESQL VÀ INSERT DATA VÀO POSTGRESQL</h3>
                <div className="form-group">  {/*các biến đc truyền đến routes/portfolioDemo2.js: */}
                <div className="row">         {/*addDataPostgresqlDemo2, usernamePostgresqlDemo2, emailPostgresqlDemo2 và passwordPostgresqlDemo2*/}
                    <div className="col-sm-3"><label htmlFor="">username</label></div>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" name="usernamePostgresqlDemo2" aria-describedby="helpId" 
                            onChange={(event)=>this.ischange(event)}/>
                    </div>
                </div> {/*/row*/}
                <div className="row">
                    <div className="col-sm-3"><label htmlFor="">email</label></div>
                    <div className="col-sm-9">
                    <input type="email" className="form-control" name="emailPostgresqlDemo2" aria-describedby="helpId" placeholder="educlong@gmail.com" 
                            onChange={(event)=>this.ischange(event)}/>
                    </div>
                </div> {/*/row*/}
                <div className="row">
                    <div className="col-sm-3"><label htmlFor="">password</label></div>
                    <div className="col-sm-9">
                    <input type="password" className="form-control" name="passwordPostgresqlDemo2" aria-describedby="helpId" placeholder="123abc>?" 
                            onChange={(event)=>this.ischange(event)}/>
                    </div>
                </div> {/*/row*/}
                <button className="btn btn-primary" type="reset" /**type="reset" để xóa trắng sau khi click*/
                        onClick={()=>{
                            if(this.state.usernamePostgresqlDemo2 && this.state.emailPostgresqlDemo2 && this.state.passwordPostgresqlDemo2){
                                this.props.insertNewFqaToDb({   /**nếu có data thì mới insert (các input !=null) */
                                    "username":this.state.usernamePostgresqlDemo2,
                                    "useremail":this.state.emailPostgresqlDemo2,
                                    "userpassword":this.state.passwordPostgresqlDemo2
                                })
                                this.props.allowAdd()   /**từ FQADemo2 truyền qua đây để đổi trạng thái của flag trong FQADemo2*/
                            }
                        }}>Submit Postgresql</button>
                </div>  {/*/form-group*/}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        insertNewFqaToDb: (newFqa) => {
            dispatch({type:"ADD_NEW_FQA_TO_DB",newFqa})
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FqaAddData)