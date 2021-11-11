import './Prolouge.css'

const Prolougue = () => {

    return (
        <body>
            <div className="prolougue_container">
                <div className="prolouge_title_container">
                    <div className="prolougue_title">Prolougue</div>
                </div>
                <div className="prolougue_image_container">
                    <img className="prolougue_image"></img> 
                    <span className="service_prolougue">
                    영화 Perfume: The Story of a Murderer의 대사에 이런 구절이 있습니다.<br/><br/>
                    A person scent is his soul (사람의 향기는 그 사람의 영혼이다)<br/><br/>
                    이처럼 향기는 사람이 바라보는 시각 만큼이나 기억에 남아 있듯,<br/><br/>
                    지금 Nostalgia 플랫폼을 통해서 <br/>많은 유저들과 향수에 대해 리뷰를 남겨<br/>
                    좋은 향수 제품을 나의 메모리에 담아 보겠습니까?
                    </span>
                </div>
            </div>
        </body>
    );
}

export default Prolougue