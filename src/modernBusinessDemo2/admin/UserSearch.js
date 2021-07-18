import React, { Component } from 'react';

class UserSearch extends Component {

    constructor(props) {
        super(props);
        this.state={
            formsearch:""
        }
    }
    

    ischange=(event)=>{ /**lấy data từ input có name="formsearch", và lưu vào state với trường targetName=formsearch*/
        var targetName = event.target.name; /**và trường targetValue= <zá trị nhập vào input search>. Sau đó truyền*/
        var targetValue= event.target.value;/*zá trị search đc(targetValue) vào hàm search(hàm này lấy từ component*/
        this.setState({[targetName]: targetValue});/**cha AdminUser.js thông qua props của UserSearch)*/
        // console.log(targetValue);   /**tại component cha sẽ nhận đc zá trị mà input nhập vào */
        // console.log(targetName);
        // this.props.search(targetValue)
        this.props.search(targetValue); /**thực hiện search luôn */
    } 

    displayFormSearch=()=>{ /**tại component con, kiểm tra props searchAllow từ component cha truyền vào. Nếu true*/
        if (this.props.searchAllow===true)  /**thì in ra (tức là admin đang ko add thêm user) thì cho phép search*/
            return(
                <div className="row">
                    <div className="col-sm-9 text-right"> 
                        Add <code>.table-hover </code> to enable a hover state on table rows within a <code> &lt;tbody&gt; </code>
                    </div>
                    <div className="col-sm-2">
                        <input className="form-control" type="text" id="search-input" placeholder="Enter key to search"
                                onChange={(event)=>this.ischange(event)} name="formsearch"/>
                    </div>{/**Làm tương tự đối với component UserSearch và UserList (truyền function search qua*/}
                    <div className="col-sm-1">{/*UserSearch, UserSearch thực hiện funtion này và đổ kết quả về cho*/}
                        <button type="button" className="btn btn-primary" /*AdminUser.js, AdminUser.js đưa kết quả*/
                                onClick={(keys)=>this.props.search(this.state.formsearch)}>{/*vào UserList để hiển */}
                            <i className="fas fa-search"></i>{/**thị ra view). CHú ý truyền tham số cho props*/}
                        </button>
                    </div>
                </div>
            ) /**Nếu false thì ko làm zì (tức là admin đang add thêm user) thì ko cho phép search */
        else return( <div className="col-sm-12 text-center">
                        Add <code>.table-hover </code> to enable a hover state on table rows within a <code> &lt;tbody&gt; </code>
                    </div>)
    }
    render() { 
        return (
            <div>
                {this.displayFormSearch()}
            </div>
        );
    }
}

export default UserSearch;