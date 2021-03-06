import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => theme.gradientWhite} 0%,
    ${({ theme }) => theme.gradientPink} 18%
  );
  overflow: hidden;
  min-height: 100vh;
`;
export const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.purplePrimary};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.Sofia};
  position: relative;
  font-weight: 100;
`;
export const StyledGreetingWrapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
`;
export const StyledGreeting = styled(StyledH1)`
  font-size: ${({ theme }) => theme.font.size.juniorStartMobile};
  font-family: ${({ theme }) => theme.font.family.Didact};

  &::after {
    content: "DASHBOARD";
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.04;
    font-size: calc(${({ theme }) => theme.font.size.juniorStartMobile} * 1.8);
  }
`;

export const RecruitmentWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 1024px;
    margin: 0px auto;
  }
`;

export const SectionInfo = styled(StyledH1)`
  color: ${({ theme }) => theme.purplePrimary};
  padding: 15px;
  font-family: ${({ theme }) => theme.font.family.Didact};

  border: 2px solid ${({ theme }) => theme.purplePrimary};
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;

  text-align: center;
  &:nth-child(1) {
    margin-top: 40px;
  }
  ${({ theme }) => theme.mq.tablet} {
    &:nth-child(1) {
      margin-top: 20px;
    }
    min-width: 30%;
    max-width: 300px;
  }
`;
export const StyledRecruitmentWrapper = styled.div`
  width: 280px;
  ${({ theme }) => theme.mq.tablet} {
    width: 30%;
    max-width: 300px;
  }
`;
export const StyledContentWrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    max-width: 768px;
    margin: 0px auto;
  }
`;
