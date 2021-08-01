import React, { Component } from 'react';
import FqaAddData from './FqaAddData';
import FqaUpdateData from './FqaUpdateData';
import { connect } from 'react-redux';

class FQADemo2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            flag: false,    /**cờ flag để xác định khi nào thì refresh lại web khi add thành công*/
            users: null
        }
    }
    /**QUERY LÊN SERVER ĐỂ LẤY DATA */
    selectFqaDb=()=>{/**lấy data từ backend (this.props.usersFQA) và lưu vào store */
        var self=this/**làm thế này thì hệ thống sẽ truy vấn vào data liên tục nếu có nhiều*/
        this.props.usersFQA.then((res)=>{   /**user truy cập vào có thể gây nghẽn mạng*/
            self.setState({users: res})/**đưa data từ store vào và lưu vào state */
        })  /**do đó cần phải có componentDidUpdate để ngắt ko cho render liên tục */
    }
    componentWillMount() {
        this.selectFqaDb()
    }
    componentDidUpdate(prevProps, prevState) {/**sau khi render xong thì check xem flag = true ko,*/
        if(this.state.flag===true)  /**nếu =true thì chuyển về false để chặn k cho query lên server*/
            this.setState({flag:false}) /**nữa tránh trường hợp treo máy, nghẽn mạng. Nếu k reset*/
    }   /**flag về false thì hệ thống sẽ query lên server mãi gây ra lỗi stackover flow...*/
    
    render() {  /**ban đầu flag=false nên k query lên server lấy data. Khi nhấn vào "Submit Postgresql"*/
        if(this.state.flag){    /**thì thay đổi trạng thái của flag từ false->true để query lên server*/
            this.props.countUserFQA.then((res)=>{
                for (let index = 0; index < res; index++){
                    this.selectFqaDb() /**query lên server để lấy data */
                    // console.log("res1");
                }
            })
        }
        return (
            <section className="py-5 container">
                <FqaAddData allowAdd={()=>{this.setState({flag:!this.state.flag})}}/>

                {/*_______________VIEW ĐỂ SELECT DATA TỪ POSTGRESQL _____________________*/}
                <div className="row">
                    <hr /><h1>KHỐI XỬ LÝ SELECT DATA TỪ POSTGRESQL </h1>
                    <table className="table table-striped table-bordered table-hover table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                                <th>#</th>
                                <th>username</th>
                                <th>email</th>
                                <th>password</th>
                                <th>date create</th>
                                <th>authority</th>
                                <th>isdelete</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            (this.state.users=== null)/*lệnh if k dùng đc nên sử dụng toán tử 3ngôi*/
                                ? (<tbody></tbody>)   /**nếu k có data thì in về rỗng. Nếu có thì*/
                                : this.state.users.map((user,key)=>{/*đưa data từ Postgredb vào*/
                                        return <FqaUpdateData user={user} key={key} index={key}
                                                allowAdd={()=>{this.setState({flag:!this.state.flag})}}/>
                            })
                        }
                    </table>
                </div>
            </section>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        usersFQA: state.fQAReducer.usersFQA,
        countUserFQA: state.fQAReducer.countUserFQA,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        countFQA: () => {
            dispatch({type:"COUNT_DATA_ALL_USER"})
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FQADemo2)