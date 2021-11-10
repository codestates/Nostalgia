import React from 'react';
import {
    FooterContainer, 
    FooterDiv,
    FooterCol,
    MemberTitle,
    MemberName,
} from './Footer.style'

const Footer = () => {
    return (    <FooterContainer>
            <FooterCol>
            <MemberTitle> team SNL member </MemberTitle>
            <MemberName> 손승우 (Son) </MemberName>
            <MemberName> 이상현 (Henry Lee) </MemberName>
            <MemberName> 이진성 (Luka Lee)</MemberName>
            <MemberName> 이진희 (Zeenii Lee)</MemberName>
        </FooterCol>
        <FooterDiv> 2021 team SNL corp </FooterDiv>
    </FooterContainer>
    )
};

export default Footer;