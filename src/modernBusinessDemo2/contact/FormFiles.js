import React, { Component } from 'react';

class FormFiles extends Component {

    isChange=(event)=>{/*lấy data từ input, và lưu vào state với trường targetName=<name của input>*/
        var targetName = event.target.name; /**và trường targetValue= <zá trị nhập vào input>.*/
        var targetValue= event.target.files[0].name;/*Sau đó truyền zá trị (targetValue) vào hàm*/
        this.setState({[targetName]: targetValue});/**getInput (hàm này lấy từ component cha*/
        this.props.getInput(targetValue)/*Forms.js thông qua props của Form) tại component cha sẽ */
    } /*nhận đc zá trị mà input nhập vào*/

    
    
    render() {
        return (
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-6"><label htmlFor={this.props.id}>Chọn hình đại diện</label></div>
                    <div className="col-sm-6">
                        <input type={this.props.type} className="form-control-file" name={this.props.name} id={this.props.id} 
                        onChange={(event) =>this.isChange(event) }/> 
                    </div>
                </div>
            </div>
        );
    }
}

export default FormFiles;