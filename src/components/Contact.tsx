
import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-top: 64px;
`;

const ContactDetails = styled.div`
  margin-top: 32px;
`;

const ContactMethod = styled.p`
  font-size: 18px;
  margin: 0;
`;

const ContactValue = styled.p`
  font-size: 24px;
  margin: 8px 0;
`;

const ContactPage: React.FC = () => {
  const companyName = "Dev-logs";
  const companyDescription = "We are a software development company focused on delivering high-quality products to our clients.";
  const companyAddress = "123 Main St, Suite 500, Anytown USA 12345";
  const companyEmail = "contact@devlogs.com";
  const companyPhone = "+1 (555) 555-5555";

  return (
    <PageContainer>
      <h1>Contact {companyName}</h1>
      <p>{companyDescription}</p>

      <SectionTitle>Address</SectionTitle>
      <ContactDetails>
        <ContactMethod>Street Address:</ContactMethod>
        <ContactValue>{companyAddress}</ContactValue>
      </ContactDetails>

      <SectionTitle>Email</SectionTitle>
      <ContactDetails>
        <ContactMethod>Email Address:</ContactMethod>
        <ContactValue>{companyEmail}</ContactValue>
      </ContactDetails>

      <SectionTitle>Phone</SectionTitle>
      <ContactDetails>
        <ContactMethod>Phone Number:</ContactMethod>
        <ContactValue>{companyPhone}</ContactValue>
      </ContactDetails>

      <SectionTitle>Social Media</SectionTitle>
      <ContactDetails>
        <ContactMethod>Twitter:</ContactMethod>
        <ContactValue>@devlogs</ContactValue>

        <ContactMethod>LinkedIn:</ContactMethod>
        <ContactValue>linkedin.com/company/devlogs</ContactValue>

        <ContactMethod>Facebook:</ContactMethod>
        <ContactValue>facebook.com/devlogs</ContactValue>
      </ContactDetails>
    </PageContainer>
  );
};

export default ContactPage;
