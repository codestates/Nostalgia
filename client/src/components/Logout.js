import React from 'react';

const Logout = ({isOpen, onSubmit, onCancel}) => {

const handleClickSubmit = () => {
    onSubmit();
};

const handleClickCancel = () => {
    onCancel();
}

    return (
        <body className="modal_container"
              isOpen={isOpen}>
            <div className="modal_backdrop">
                <div className="logout_box">
                    <span className="logout_question"> 로그아웃 하시겠습니까?</span>
                    <button className="not_confirm"
                            onClick={handleClickCancel}>취소</button>
                    <button className="confirm"
                            onClick={handleClickSubmit}>로그아웃</button>
                </div>
            </div>
        </body>
    )
}

export default Logout