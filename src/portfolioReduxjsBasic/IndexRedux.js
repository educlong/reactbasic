import React, { Component } from 'react';
import {connect} from 'react-redux' /**Chú ý để kết nối cần import connect vs store ra */

/**_________________ REDUX JS______________ */
class IndexRedux extends Component {
    render() {
        return (
            <div>
                {this.props.laptop}{/*lấy data từ trong store1 ra,lưu vô props của component này*/}
                
                {/*khi click->change state statusUpdate trong Store.js ==> có 2 cách*/}
                {/* <button className="btn btn-primary" /**CÁCH 1: VIẾT TRỰC TIẾP */ }
                    {/* onClick={()=>{/*khi kết nối vs store thì mặc định IndexRedux này đc sử dụng dispatch*/}
                        {/* var {dispatch}=this.props;/*Cách viết khác của: var dispatch=this.props.dispatch*/}
                        {/* dispatch({type:"CHANGE_STATUS"})/**dispatch này thực hiện action CHANGE_STATUS*/}
                    {/*</div>}}>Click me 1</button>{/* trong store1 để thay đổi trạng thái statusUpdate */}

                <button className="btn btn-primary" /**CÁCH 2: VIẾT THÔNG QUA HÀM mapDispatchToProps */
                    onClick={()=>this.props.changeStatusUpdateInStore()}>Click me 2</button>
            </div>  /**changeStatusUpdateInStore đã trở thành 1 props nên gọi dễ dàng hơn*/
        );
    }
}


/**Bước 2: kết nối vs Store.js (Bước 1 tại Store.js) */
/**TRUYỀN STATE TRONG STORE QUA CÁC COMPONENT DƯỚI DẠNG PROPS */
const mapStateToProps = (state, ownProps) => {/**lấy dữ liệu store từ Store.js ra, phím tắt: map...*/
    return {
        laptop: state.laptop,/*lấy state mảng laptop trong Store ra và lưu vào props của IndexRedux*/
        statusUpdate: state.statusUpdate/*như zậy state của store1 đc truyền qua IndexRedux thông*/
    }/*qua 1 props tên là this.props.laptop. Hoặc có thể lấy state khác (ko cần phải lấy hết state)*/
}

/**TRUYỀN CÁC ACTION TRONG STORE QUA CÁC COMPONENT DƯỚI DẠNG PROPS (thông qua DISPATCH) */
const mapDispatchToProps = (dispatch, ownProps) => {
    return{/*tạo 1 hàm changeStatusUpdateInStore để gọi action, vs nội dụng là action CHANGE_STATUS*/
        changeStatusUpdateInStore: () => {dispatch({type:"CHANGE_STATUS"})} /**trong Store */
    }   /**lúc này changeStatusUpdateInStore sẽ biến thành 1 props trong component này */
}

/**Để kết nối vs Store.js -> cần export default từ hàm connect ra và truyền vào IndexRedux*/
export default connect(mapStateToProps, mapDispatchToProps)(IndexRedux) /**chú ý import */
/*Sau khi truyền vào rồi thì tại file index.js (cùng cấp vs App.js) phải nhận đc-> Bước 3: index.js*/
