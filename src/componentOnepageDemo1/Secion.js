import React, { Component } from 'react';

class Secion extends Component {
    
    /**Lưu ý phân biệt zữa props và state, 
     * - props: tương tự local variable (biến trong hàm, biến cục bộ) -> bên ngoài truyền vào khi tạo object (component)
     * - state: tương tự instance variable (thuộc tính của class trong oop, đặt bằng private) */

    constructor(props){         /**tạo constructor tương tự như trong OOP */
        super(props);
        this.state ={           /*biến state có sẵn khi tạo class. ban đầu trạng thái =0, khi click vào button btnAnnouncemen thì */
            statusDisplay: 0,   /* đổi trạng thái và hiển thị renderBtnAnnounce hay renderFormAnnouncement*/
        }
    }   /**từ đây: đọc từ dưới đọc lên */
    
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
                <div className="form-group col-sm-6"> {/*Save (endAnnouncement) thì sẽ in ra bienTrungGian đó=> vào endAnnouncement xử lý*/}
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

    renderForSection =()=>(
        <div className="container px-5">
            <div className="row gx-5 align-items-center">
                <div className={"col-lg-6 "+this.props.orderImg}>  {/**truyền props cho component tại App.js*/}
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

    render() {
       console.log("running render, trạng thái "+this.state.statusLifecycle);

        return (/* <!-- Navigation--> trước khi paste vào đây thì copy code html, paste vào */
            <section id="scroll">{/**https://magic.reactjs.net/htmltojsx.htm để chuyển đổi thành jsx */}
                
                {this.renderForSection()}   {/*___________*/}
                <hr/>{/*Xử lý cho section      ___________*/}
            </section>
        );
    }

    
}

export default Secion;