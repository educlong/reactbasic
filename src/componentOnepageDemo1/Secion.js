import React, { Component } from 'react';

class Secion extends Component {
    
    /**Lưu ý phân biệt zữa props và state, 
     * - props: tương tự local variable (biến trong hàm, biến cục bộ) -> bên ngoài truyền vào khi tạo object (component)
     * - state: tương tự instance variable (thuộc tính của class trong oop, đặt bằng private) */

    constructor(props){         /**tạo constructor tương tự như trong OOP */
        super(props);
        this.state ={           /*biến state có sẵn khi tạo class. ban đầu trạng thái =0, khi click vào button btnAnnouncemen thì */
            statusDisplay: 0,   /* đổi trạng thái và hiển thị renderBtnAnnounce hay renderFormAnnouncement*/

            statusLifecycle: "initialization"/**trạng thái khởi tạo (xử lý lifecycle) (chỉ dòng code này liên quan đến lifecycle ở vùng này)*/
        }
    }
    
    renderBtnAnnounce = () => { /**component hóa các phần tử => lưu ý cách gọi hàm kiểu arrow function*/
        return(
            <div className="row text-center">
                <div className="col-sm-3 push-sm-1"><button className="btn btn-info">Edit</button></div>
                <div className="col-sm-5 push-sm-1">    {/*Lưu ý: gọi hàm trong reactjs -> 1. onClick, 2. có dấu {}, 3. phải có từ khóa this*/}
                    <button className="btn btn-warning" onClick={()=>this.btnAnnouncemen(this.props.titleSectionDemo1)}>Announcement</button>
                </div>   {/*4. gọi theo kiểu arrow function và truyền tham số vào*/}
            </div>  /**cách 2 để gọi hàm -> dùng binding: onClick={this.btnAnnouncemen.bind(this,this.props.titleSectionDemo1)} */
        )
    } 


    /**________ZẢI THÍCH DefaultValue và Ref _________*/
    renderFormAnnouncemen = () => ( /**component hóa các phần tử, có thể dùng dấu () thay vì { return () } */
            <div className="row text-center">   {/**đưa data mà user nhập trong trường input vào bienTrungGian, và khi click vào nút*/}
                <div className="form-group col-sm-6">  {/** endAnnouncement thì sẽ in ra bienTrungGian đó => vào endAnnouncement xử lý */}
                    <input type="text" className="form-control" name="announcemen" 
                            defaultValue={this.props.titleSectionDemo1} /**sử dụng defaultValue hiển thị title lên input*/
                            ref={(dataInput)=> {this.bienTrungGian = dataInput}}/>{/*khi lưu vào state->state sẽ phânbố cho các hàm trong*/}
                </div>  {/**component này và k cần render lại. Còn bienTrungGian này chỉ lưu info thôi, và khi thay đổi bienTrungGian này*/}
                <div className="form-group col-sm-6">{/*thì phải vào check mới biết đc, còn state thì k cần check, nó tự biến nó thay đổi*/}
                    <button className="btn btn-warning" onClick={()=>this.endAnnouncement()}>Save</button>
                </div>
            </div>
        )

    checkDisplay = () => {
        if(this.state.statusDisplay === 0)          /**nếu biến statusDisplay = 0 (chú ý so sánh dùng 3 dấu =) */
            return this.renderBtnAnnounce();        /**thì cho hiển thị button */
        else return this.renderFormAnnouncemen();   /**còn ko thì hiển thị form */
    }

    /**Tương tác viết hàm, VD: */
    btnAnnouncemen =(title) =>{
        alert("Cách viết tương tác với hàm không có tham số trong React JS. "+title);
        this.setState({         /**nhấn vào btnAnnouncemen thì chuyển đổi trạng thái của state.statusDisplay (ko đc viết statusDisplay=1)*/
            statusDisplay: 1    /**mà phải đưa vào setState như hướng đối tượng */
        });
    }

    endAnnouncement =() =>{
        this.setState({         /**nhấn vào save thì chuyển đổi trạng thái của state.statusDisplay (ko đc viết statusDisplay=1)*/
            statusDisplay: 0    /**mà phải đưa vào setState như hướng đối tượng */
        }); /**in ra bienTrungGian đc lấy từ ref trong hàm renderFormAnnouncemen. Muốn đưa bienTrungGian ra view thì cần phải render lại*/
        console.log(this.bienTrungGian.value);  /**toàn bộ component này. Ở đây chỉ lấy đc thông tin mà user người ta nhập vào thôi */
    }

    renderForSection =()=>(
        <div className="container px-5">
            <div className="row gx-5 align-items-center">
                <div className={"col-lg-6 "+this.props.orderImg}>  {/**truyền props cho component */}
                    <div className="p-5"><img className="img-fluid rounded-circle" src={this.props.imgSectionDemo1} alt="..." /></div>
                </div>
                <div className={"col-lg-6 "+this.props.orderText}> {/**truyền props cho component */}
                    <div className="p-5">   {/**Coi col-lg-6 là 1 chuỗi + 1 biến là this.props.orderText, lúc đó view mới nhận đc */}
                        <h2 className="display-4">{this.props.titleSectionDemo1}</h2> {/**truyền props cho component */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                        <div className="container">
                            {this.checkDisplay()} {/*gọi hàm checkDisplay để check đang hiển thị renderBtnAnnounce hay renderFormAnnouncemen*/}
                        </div> {/**gọi hàm ở đây ko gọi bằng arrow function (vì arrow function phải click vào mới nhận) */}
                    </div>
                </div>
            </div>
        </div>
    )








    /** =================== LIFECYCLE TRONG REACT JS ====================== */

    /**Đầu tiên, viết 1 hàm để cập nhật state (Update state). Sau đó gọi 1 sự kiện nào đó, vd click vào button
     * thì gọi sự kiện để cập nhật state. Khi click để tương tác vs state thì đầu tiên phải chạy hàm
     * shouldComponentUpdate để cho phép cập nhật hay k (true: allow, false: not allow).
     * Sau đó nếu cho phép (shouldComponentUpdate=true) thì mới làm tiền update (componentWillUpdate).
     * Sau khi xử lý tiền update thì update(render). 
     * 
     *      Nếu có truyền states (VD: this.state.statusLifecycle) qua 1 component khác (VD: UpadteProps)
     *      thì props tại component đó (UpadteProps) sẽ nhận state này -> lưu vào props của UpadteProps
     *      => Qúa trình chạy lifecycle tại component UpadteProps tương tự như lifecycle tại Secion
     *      nhưng chú ý ở đây trước khi vào shouldComponentUpdate có thêm componentWillReceiveProps.
     *      componentWillReceiveProps sẽ nhận props từ component Secion giử qua component UpadteProps.
     * 
     *      Tức là: đầu tiên ko phải chạy shouldComponentUpdate như trên, mà chạy componentWillReceiveProps.
     *      Sau đó chạy shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
     * 
     * và cuối cùng là xử lý hậu update (componentDidUpdate) tại component Secion
     */



    /**trong quá trình phát triển của lifecycle thì 
     * Bước 1: đầu tiên phải đặt initialization trước => Chính là hàm constructor 
     *          -> đã khai báo ở trên (gõ con-> tab) trong constructor này có thể khai báo 1 state hay 1 props
     * Bước 2: Mounting
     *      2.1: componentWillMount: trước khi render (gõ: cwm-> tab)
    */
   componentWillMount() {
       console.log("running componentWillMount");
   }
   
   /*       2.2: render (sau khi componentWillMount thì đến bước render)
    */
    render() {
       console.log("running render, trạng thái "+this.state.statusLifecycle);

        return (/* <!-- Navigation--> trước khi paste vào đây thì copy code html, paste vào */
            <section id="scroll">{/**https://magic.reactjs.net/htmltojsx.htm để chuyển đổi thành jsx */}
                
                {/* Phần này xử lý cho section ___________*/}
                {this.renderForSection()}   {/*___________*/}
                <hr/>{/*Xử lý cho section      ___________*/}
                



                {/**___________VD về lifecycle trong react _____________*/}
                <div className="container"><div className="row">
                    

                    {/**Lifecycle for state */}
                    <div className="col-sm-2">
                        <button className="btn btn-secondary" 
                                onClick={
                                          () => { /**khi nhấn vào Update state thì tiến hành thay đổi state (cập nhật state, tức là*/
                                                    this.setState({ /**VD đổi initialization thành updated) */
                                                        statusLifecycle:"updated"/*(xử lý tại render) đc truyền vào component UpadteProps*/
                                                    });
                                                }
                                        }>Update state</button>
                    </div>

                    
                    {/**Lifecycle for props */} 
                    <UpadteProps lifecyclePropsDemo={this.state.statusLifecycle}/> {/**truyền state này qua 1 class khác (component khác)*/}
                    {/*tại component nhận(component UpadteProps)sẽ nhận đc state statusLifecycle này & lưu vào props của component đó*/}
                    {/**lifecyclePropsDemo là 1 props của UpadteProps (do đó tại component UpadteProps sẽ nhận đc props) */}
                </div></div>
                
            </section>
        );
    }


    /*       2.3: componentDidMount: sau khi render (gõ: cdm-> tab)
    */
   componentDidMount() {
       console.log("componentDidMount is run");
   }
   
   /** Bước 3: Updation (Updation for props và Updation for state)
    *       3.1: Updation for states
    *          3.1.1: shouldComponentUpdate:  (gõ: scu-> tab): chỉ cần click vào 1 thẻ có thực hiện js onClick là tự động nhảy vào hàm này */
    shouldComponentUpdate(nextProps, nextState) {/*phương thức này đc gọi để cho phép update state. shouldComponentUpdate trả về true hoặc false*/
        console.log("shouldComponentUpdate is run");/**nếu trả về true thì chạy thêm hàm componentWillUpdate. Nếu false dừng lại luôn */
        return true;
    }
    /*         3.1.2: componentWillUpdate:  (gõ: cwup-> tab)  */
    componentWillUpdate(nextProps, nextState) {     /**nếu đúng thì chạy tiếp componentWillUpdate, */
        console.log("componentWillUpdate is run");    
    }
    /*         3.1.3: render (đã có trên)              sau đó render lại, và cuối cùng là componentDidUpdate
               3.1.4: componentDidUpdate:  (gõ: cdup-> tab)  */
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate is run");
    }
    
}


/**Đầu tiên, viết 1 hàm để cập nhật state (Update state). Sau đó gọi 1 sự kiện nào đó, vd click vào button
 * thì gọi sự kiện để cập nhật state. Khi click để tương tác vs state thì đầu tiên phải chạy hàm
 * shouldComponentUpdate để cho phép cập nhật hay k (true: allow, false: not allow).
 * Sau đó nếu cho phép (shouldComponentUpdate=true) thì mới làm tiền update (componentWillUpdate).
 * Sau khi xử lý tiền update thì update(render). 
 * 
 *      Nếu có truyền states (VD: this.state.statusLifecycle) qua 1 component khác (VD: UpadteProps)
 *      thì props tại component đó (UpadteProps) sẽ nhận state này -> lưu vào props của UpadteProps
 *      => Qúa trình chạy lifecycle tại component UpadteProps tương tự như lifecycle tại Secion
 *      nhưng chú ý ở đây trước khi vào shouldComponentUpdate có thêm componentWillReceiveProps.
 *      componentWillReceiveProps sẽ nhận props từ component Secion giử qua component UpadteProps.
 * 
 *      Tức là: đầu tiên ko phải chạy shouldComponentUpdate như trên, mà chạy componentWillReceiveProps.
 *      Sau đó chạy shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
 * 
 * và cuối cùng là xử lý hậu update (componentDidUpdate) tại component Secion
 */



class UpadteProps extends Component{ /**xử lý nhận props tại component này, theo 5 bước  */
    /*      3.2: Updation for props
    *          3.2.1: componentWillReceiveProps (gõ cwr-> tab) --> hàm này chỉ sử dụng để update props, ko sử dụng cho update state */
    componentWillReceiveProps(nextProps, nextState) {/*props này (this.props.lifecyclePropsDemo) nhận đc tại đây, đc đặt vào */
        console.log("UpadteProps's componentWillReceiveProps is run! "+nextProps.lifecyclePropsDemo);/**nextProps.lifecyclePropsDemo*/
    }   /**từ state statusLifecycle trên.       componentWillReceiveProps sẽ nhận props đc truyền vào */
    
   /*          3.2.2: shouldComponentUpdate:  (gõ: scu-> tab): chỉ cần click vào 1 thẻ có thực hiện js onClick là tự động nhảy vào hàm này */
    shouldComponentUpdate(nextProps, nextState) {/*phương thức này đc gọi để cho phép update state. shouldComponentUpdate trả về true hoặc false*/
        console.log("UpadteProps's shouldComponentUpdate is run");/**nếu trả về true thì chạy thêm componentWillUpdate. Nếu false dừng lại luôn*/
        return true;
    }
    /*         3.2.3: componentWillUpdate:  (gõ: cwup-> tab)  */
    componentWillUpdate(nextProps, nextState) {     /**nếu đúng thì chạy tiếp componentWillUpdate, */
        console.log("UpadteProps's componentWillUpdate is run");    
    }
    /*         3.2.4: render */
    render(){
        console.log("UpadteProps's render");
        // console.log(this.props);
        return( 
            <div className="col-sm-3"><h6>LIFECYCLE IN REACT, example {this.props.lifecyclePropsDemo}</h6></div>
        );
    }
    /*         3.2.5: componentDidUpdate:  (gõ: cdup-> tab)  */
    componentDidUpdate(prevProps, prevState) {
        console.log("UpadteProps's componentDidUpdate is run");
    }
}


export default Secion;