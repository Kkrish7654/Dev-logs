import React from "react";
import styled from "styled-components";

const AboutPageContainer = styled.div`
  background-color: #f5f5f5;
  color: #333;
  padding: 20px;
`;

const CompanyName = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  color: #008080;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const TeamHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #008080;
`;

const TeamList = styled.ul`
  font-size: 18px;
  margin-left: 30px;
  margin-bottom: 20px;
`;

const TeamMember = styled.li`
  margin-bottom: 5px;
`;

const AboutPage: React.FC = () => {
  const company = "Dev-logs";
  const yearFounded = 2021;

  return (
    <AboutPageContainer>
      <CompanyName>About {company}</CompanyName>
      <Description>
        Founded in {yearFounded}, {company} is a leading company in the industry.
      </Description>
      <TeamHeading>Our Team</TeamHeading>
      <TeamList>
        <TeamMember>John Doe - CEO</TeamMember>
        <TeamMember>Jane Smith - CTO</TeamMember>
        <TeamMember>Mike Johnson - COO</TeamMember>
      </TeamList>
    </AboutPageContainer>
  );
};

export default AboutPage;
