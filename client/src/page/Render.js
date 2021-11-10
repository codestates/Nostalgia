import {RendererCon , 
        Title, 
        LoginBtn,
        SignUpBtn, 
        CliContainer,
        GuestContainer,
        GuestIntoBtn,} from "./Render.style"
import Prolougue from "../components/Prolougue";


const Render = () => {

    return (
    <RendererCon>
        <Title>Nostalgia</Title>
        <CliContainer>
            <LoginBtn>Login</LoginBtn>
            <SignUpBtn>Sign Up</SignUpBtn>
        </CliContainer>
        <GuestContainer>
            <GuestIntoBtn>Into</GuestIntoBtn>
        </GuestContainer>
        <Prolougue/>
    </RendererCon>
    )
};

export default Render;