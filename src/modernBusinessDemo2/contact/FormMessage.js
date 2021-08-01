import React, { Component } from 'react';

class FormMessage extends Component {

    isChange=(event)=>{/*lấy data từ input, và lưu vào state với trường targetName=<name của input>*/
        var targetName = event.target.name; /**và trường targetValue= <zá trị nhập vào input>.*/
        var targetValue= event.target.value;/*Sau đó truyền zá trị (targetValue) vào hàm getInput*/
        this.setState({[targetName]: targetValue});/** (hàm này lấy từ component cha Forms.js*/
        this.props.getInput(targetValue)/* thông qua props của Message) tại component cha sẽ */
    } /*nhận đc zá trị mà input nhập vào*/

    
    
    render() {
        return (/* Message input*/
            <div className="form-floating mb-3">
                <textarea className="form-control" id={this.props.id} type={this.props.type} placeholder={this.props.placeholder} 
                            style={{height: '10rem'}} data-sb-validations={this.props.validations}  defaultValue={""} 
                            onChange={(event) => this.isChange(event) }/>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <div className="invalid-feedback" data-sb-feedback={this.props.feedback}>{this.props.contentFeedback}</div>
            </div>
        );
    }
}

export default FormMessage;