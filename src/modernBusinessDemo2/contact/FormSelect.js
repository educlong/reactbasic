import React, { Component } from 'react';

class FormSelect extends Component {

    isChange=(event)=>{/*lấy data từ input, và lưu vào state với trường targetName=<name của input>*/
        var targetName = event.target.name; /**và trường targetValue= <zá trị nhập vào input>.*/
        var targetValue= event.target.value;/*Sau đó truyền zá trị (targetValue) vào hàm getInput*/
        this.setState({[targetName]: targetValue});/** (hàm này lấy từ component cha Forms.js*/
        this.props.getInput(targetValue)/* thông qua props của Message) tại component cha sẽ */
    } /*nhận đc zá trị mà input nhập vào*/

    
    
    render() {
        return (
            <div className="form-floating mb-3 form-group">
                <select className="form-control" name={this.props.name} id={this.props.id}
                        onChange={(event) =>this.isChange(event) }>     
                    <option value="male">Man</option>   {/*zá trị nhập vào trong các trường input đc lưu vào biến event*/}
                    <option value="female">Woman</option>
                    <option value="les">Lesbian</option>
                    <option value="gay">Gay</option>
                    <option value="bis">Bisexual</option>
                    <option value="trans">Transgender</option>
                    <option value="queer">Queer</option>
                </select>
                <label htmlFor={this.props.id}>Zới tính</label>                            
            </div>
        );
    }
}

export default FormSelect;