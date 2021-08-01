import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from './Form';
import FormFiles from './FormFiles';
import FormMessage from './FormMessage';
import FormSelect from './FormSelect';
import FormSubmit from './FormSubmit';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state={
            isRedirect : false,   /**set 1 state để cho phép redirect. ban đầu k cho phép, false*/
        }
    }

    
    // /**Bước 2: (zải thích khái niệm: handle multiple form input react js)
    
    //      -> ko cần thực hiện, vì đã thực hiện trong các component con*/
    // isChange = (event) => { /**hiển thị tên của nội dung trong trường input nhập vào */
    //     /**zá trị nhập vào trong các trường input đc lưu vào biến event thì ở đây có thể log ra để theo dõi*/
    //     // console.log(event.target.name+": "+event.target.value);   /**tên trường có zá trị của input nhập*/
    //     const targetName=event.target.name;     /**vào (formname, formemail,..). Zátrị của target là zá trị*/
    //     const targetValue=event.target.value;   /**của input nhập vào khi gọi hàm này */
    //     this.setState({ /**lấy đc các trường rồi thì cần lưu vào state (state là biến trung zan có thể lưu*/
    //         [targetName] : targetValue /** mọi thứ). ở đây có thể cùng lúc đẩy cả name và value vào state*/
    //     })  /**bằng khái niệm: "handle multiple form input react js" để set nhiều name và value cùng lúc*/
    // }   /**tự động hiểu react sẽ set thêm state để gán vào targetName và targetValue */


    printOutput=()=>{
        console.log("Name: "+this.state.formname+", Email: "+this.state.formemail/*trước khi redirect*/
                +", Phone: " +this.state.formphone+", Message: "+this.state.formmessage /*thì in ra*/
                +", Gender: "+this.state.formgender+", Avatar: "+this.state.formAvatar);/**để check*/
    }


    render() {
        if (this.state.isRedirect === true) { /**sau khi chặn k cho submit thì redirect về trang home */
            this.printOutput();
            return <Redirect to={"/demo2/home"}/>;/**nếu trạng thái redirect=true thì cho phép chuyển hướng */
        }
        return (
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                {/* * * * * * * * * * * * * * * **/}
                {/* * * SB Forms Contact Form * **/}
                {/* * * * * * * * * * * * * * * **/}
                {/* This form is pre-integrated with SB Forms.*/}
                {/* To make this form functional, sign up at*/}
                {/* https://startbootstrap.com/solution/contact-forms*/}
                {/* to get an API token!*/}
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                        {/* Name input: lấy thông tin nhập vào tại hàm getInput trong component Form*/}
                        <Form   id="name"  type="text" placeholder="Enter your name..."
                                validations="required" name="formname"  label="Full name" 
                                feedback1="name:required" contentFeedback1="A name is required."
                                feedback2=" " contentFeedback2=" "/**truyền và lưu tại state formname*/
                                getInput={(printInput)=>{this.setState({formname: printInput});}}/>

                        {/* Email address input: lấy thông tin nhập vào tại hàm getInput trong component Form*/}
                        <Form   id="email" type="email" placeholder="name@example.com" /**truyền và lưu tại*/
                                name="formemail" validations="required,email"  label="Email address" /*state*/
                                feedback1="email:required" contentFeedback1="An email is required."/*formemail*/
                                feedback2="email:email" contentFeedback2="Email is not valid."
                                getInput={(printInput)=>{this.setState({formemail: printInput});}}/>

                        {/* Phone number input: lấy thông tin nhập vào tại hàm getInput trong component Form*/}
                        <Form   id="phone" type="tel" placeholder="(123) 456-7890" /**truyền và lưu tại state*/
                                name="formphone" validations="required" label="Phone number" /**formphone */
                                feedback1="phone:required" contentFeedback1="A phone number is required."
                                feedback2=" " contentFeedback2=" "
                                getInput={(printInput)=>{this.setState({formphone: printInput});}}/>

                        {/* Message input: lấy thông tin nhập vào tại hàm getInput trong component FormMessage*/}
                        <FormMessage id="message" type="text" placeholder="Enter your message here..."/**truyền*/
                                name="formmesage"validations="required" label="Message"     /*và lưu tại state */
                                feedback="message:required" contentFeedback="A message is required."/*formmessage*/
                                getInput={(printInput)=>{this.setState({formmessage: printInput});}}/>

                        {/**Gender input: lấy thông tin nhập vào tại hàm getInput trong component FormSelect*/}
                        <FormSelect id="gender" name="formgender" /**truyền và lưu tại state formgender*/
                                getInput={(printInput)=>{this.setState({formgender: printInput});}}/>

                        {/**FILE input: lấy thông tin nhập vào tại hàm getInput trong component FormFiles*/}
                        <FormFiles id="avatar" name="formavatar" type="file" /**truyền và lưu tại state formAvatar*/
                                getInput={(printInput)=>{this.setState({formAvatar: printInput});}}/>
                                
                        {/* Submit success message: truyền state isRedirect vào form submit và xử lý trong đó*/}
                        <FormSubmit allowSubmit={()=>{this.setState({isRedirect: !this.state.isRedirect});}}/>
                    </form>{/*nếu submit ok thì chuyển trạng thái của isRedirect từ flase->true, và ngược lại*/}
                </div>
            </div>
        );
    }
}

export default Forms;