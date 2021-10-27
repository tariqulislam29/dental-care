import React from 'react';

const Contact = () => {
    return (
        <div className="d-flex justify-content-center my-5">

            <div className="w-50 border p-3">
                <div>
                    <h4 className="fs-4">If you have any question feel free to mail us</h4>
                </div>
                <div className="mb-3">

                    <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label  fw-bold">Textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="textarea"></textarea>
                </div>
                <div>
                    <button type="button" class="btn btn-success">Success</button>

                </div>
            </div>
        </div>
    );
};

export default Contact;