
import {ProlougueCon,
        TitleCon, 
        ProlougueTitle, 
        Imgblock,
        Service,
        Sec_Container } from "./Prolougue.style"


const Prolougue = () => {

    return (
        <ProlougueCon>
            <TitleCon>
            <ProlougueTitle>Prolougue</ProlougueTitle>
            </TitleCon>
            <Sec_Container>
                <Imgblock/>
                <Service>
                영화 Perfume: The Story of a Murderer에서의 대사에 이런 구절이 있습니다.<br/><br/>
                A person scent is his soul<br/> (사람의 향기는 그 사람의 영혼이다)<br/><br/>
                이처럼 향기는 사람이 바라보는 시각 만큼이나 기억에 남아 있듯,<br/>
                지금 Nostalgia 플랫폼을 통해서 <br/>많은 유저들과 향수에 대해 <br/>리뷰를 남겨<br/><br/>
                좋은 향수 제품을 나의 메모리에 담아 보겠습니까?
                </Service>
            </Sec_Container>
        </ProlougueCon>

    )
}

export default Prolougue