import React from "react";
import styled from "styled-components";
import { Thumbnail } from "../atoms/thumbnail";
import group from "../../assets/images/ramen.svg";
import aymeline from "../../assets/images/aymeline.svg";
import melanie from "../../assets/images/melanie.svg";
import marie from "../../assets/images/marie.svg";
import quentin from "../../assets/images/quentin.svg";
import rainald from "../../assets/images/rainald.svg";
import federica from "../../assets/images/federica.svg";
import mathieu from "../../assets/images/mathieu.svg";
import ketsia from "../../assets/images/ketsia.svg";

export const Header = ({ setMember }) => {
  const members = [
    {
      id: 1,
      imgUrl: group,
    },
    { id: 2, imgUrl: melanie },
    { id: 3, imgUrl: marie },
    { id: 4, imgUrl: aymeline },
    { id: 5, imgUrl: quentin },
    { id: 6, imgUrl: rainald },
    { id: 7, imgUrl: federica },
    { id: 8, imgUrl: mathieu },
    { id: 9, imgUrl: ketsia },
  ];
  return (
    <HeaderContainer>
      {members.map((member) => (
        <Thumbnail
          imgUrl={member.imgUrl}
          id={member.id}
          setMember={setMember}
        />
      ))}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
