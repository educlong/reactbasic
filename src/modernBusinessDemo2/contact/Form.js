import React, { Component } from 'react';

class Form extends Component {

    isChange=(event)=>{/*lấy data từ input, và lưu vào state với trường targetName=<name của input>*/
        var targetName = event.target.name; /**và trường targetValue= <zá trị nhập vào input>.*/
        var targetValue= event.target.value;/*Sau đó truyền zá trị (targetValue) vào hàm*/
        this.setState({[targetName]: targetValue});/**getInput (hàm này lấy từ component cha*/
        this.props.getInput(targetValue)/*Forms.js thông qua props của Form) tại component cha sẽ */
    } /*nhận đc zá trị mà input nhập vào*/

    
    render() {      /**zá trị của target là zá trị của input nhập vào khi gọi hàm này */
        return (
            <div className="form-floating mb-3">
                <input className="form-control" id={this.props.id} type={this.props.type} placeholder={this.props.placeholder} 
                        data-sb-validations={this.props.validations} name={this.props.name} 
                        onChange={(event) => this.isChange(event) }/>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <div className="invalid-feedback" data-sb-feedback={this.props.feedback1}>{this.props.contentFeedback1}</div>
                <div className="invalid-feedback" data-sb-feedback={this.props.feedback2}>{this.props.contentFeedback2}</div>
            </div>
        );
    }
}

export default Form;