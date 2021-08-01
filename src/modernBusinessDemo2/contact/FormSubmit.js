import React, { Component } from 'react';

class FormSubmit extends Component {
    
    submitFormContact = (eventSubmitContact)=>{ /**tạo 1 sự kiện và gọi ra tại component Submit */
        eventSubmitContact.preventDefault();    /**preventDefault: hàm để ngăn chặn k cho chuyển trang*/
        this.props.allowSubmit();
    }

    render() {
        return (
            <div>
                {/**/}
                {/* This is what your users will see when the form*/}
                {/* has successfully submitted*/}
                <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                        <div className="fw-bolder">Form submission successful!</div>
                        To activate this form, sign up at
                        <br />
                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                </div>
                {/* Submit error message*/}
                {/**/}
                {/* This is what your users will see when there is*/}
                {/* an error submitting the form*/}
                <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">Error sending message!</div>
                </div>
                {/* Submit Button*/}
                <div className="d-grid">
                    <button className="btn btn-primary btn-lg " id="submitButton" type="submit"
                            onClick={(eventSubmitContact) =>this.submitFormContact(eventSubmitContact)}>Submit</button>
                </div>  {/**gọi onClick submitFormContact để ngăn chặn ko cho chuyển trang*/}
            </div>/**Nếu ko có submitFormContact thì khi nhấn submit, form sẽ tự động chuyển đến action trong form*/
        );
    }
}

export default FormSubmit;