import React from "react";
import styled from "styled-components";
import { SubTitle } from "../atoms/subtitle";
import { Title } from "../atoms/title";
import ig from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import github from "../../assets/images/github.svg";
import gmail from "../../assets/images/gmail.svg";
import { Social } from "../molecules/social";

export const ContactSection = () => {
  const socials = [
    {
      label: "instagram",
      logo: ig,
      link: "",
    },
    {
      label: "twitter",
      logo: twitter,
      link: "",
    },
    {
      label: "gmail",
      logo: gmail,
      link: "",
    },
    {
      label: "github",
      logo: github,
      link: "",
    },
  ];
  return (
    <ContactContainer>
      <SubTitle content="DO YOU WANT TO CONTACT US?" />
      <Title content="contact us" />
      <LinksContainer>
        {socials.map((social) => (
          <CustomSocial
            label={social.label}
            logo={social.logo}
            link={social.link}
          />
        ))}
      </LinksContainer>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LinksContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const CustomSocial = styled(Social)`
  margin-right: 1rem;
`;
