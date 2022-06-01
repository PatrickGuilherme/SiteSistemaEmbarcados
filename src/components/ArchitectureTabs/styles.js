import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  background-color: #36922e;
  color: #fff;
  font-weight: bold;
  border: none;
  font-size: 0.9rem;

  box-shadow: 2px 2px 0 #1a4516, 3px 3px 0 #1a4516, 4px 4px 0 #1a4516,
    5px 5px 0 #1a4516;

  text-shadow: 1px 2px #1a4516;
  :hover {
    margin-top: 1px;
    box-shadow: 1px 1px 0 #1a4516, 2px 2px 0 #1a4516;
    margin-top: 2px;
    margin-left: 2px;
  }
`;

export const OscillatorButton = styled(Button)`
  position: absolute;
  top: 49px;
  left: 22px;
  width: 82px;
`;

export const InternalOscillatorButton = styled(Button)`
  position: absolute;
  top: 105px;
  left: 22px;
  width: 82px;
`;

export const SPIButton = styled(Button)`
  position: absolute;
  top: 27px;
  left: 134px;
  width: 42px;
  height: 100px;
`;

export const USARTButton = styled(Button)`
  position: absolute;
  font-size: 0.7rem;
  top: 27px;
  left: 180px;
  width: 42px;
  height: 100px;
`;

export const T0Button = styled(Button)`
  position: absolute;
  font-size: 0.7rem;
  top: 27px;
  left: 245px;
  width: 26px;
  height: 60px;
`;

export const T1Button = styled(Button)`
  position: absolute;
  font-size: 0.7rem;
  top: 27px;
  left: 275px;
  width: 26px;
  height: 60px;
`;

export const T2Button = styled(Button)`
  position: absolute;
  font-size: 0.7rem;
  top: 27px;
  left: 305px;
  width: 26px;
  height: 60px;
`;

export const ADConverter = styled(Button)`
  position: absolute;
  font-size: 0.7rem;
  top: 250px;
  left: 22px;
  width: 82px;
  height: 55px;
`;

export const Vref = styled(Button)`
  position: absolute;
  font-size: 0.7rem;
  top: 317px;
  left: 22px;
  width: 82px;
  height: 55px;
`;

export const PortButtonContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 22px;
`;

export const PortButton = styled(Button)`
  margin-right: 14px;
  font-size: 0.7rem;
  height: 30px;
  width: 50px;
`;

export const CCPButton = styled(Button)`
  position: absolute;
  font-size: 0.7rem;
  bottom: 237px;
  left: 135px;
  height: 30px;
  width: 85px;
`;

export const PWMButton = styled(Button)`
  position: absolute;
  font-size: 0.7rem;
  bottom: 187px;
  left: 135px;
  height: 30px;
  width: 85px;
`;

export const CPUButton = styled(Button)`
  position: absolute;
  font-size: 1.2rem;
  bottom: 217px;
  left: 248px;
  height: 100px;
  width: 80px;
`;

export const InterruputsButton = styled(Button)`
  position: absolute;
  font-size: 0.7rem;
  bottom: 177px;
  left: 248px;
  height: 30px;
  width: 80px;
`;

export const WDTButton = styled(Button)`
  position: absolute;
  font-size: 0.8rem;
  bottom: 137px;
  left: 248px;
  height: 30px;
  width: 80px;
`;

export const SFRButton = styled(Button)`
  position: absolute;
  font-size: 0.8rem;
  top: 35px;
  left: 355px;
  height: 60px;
  width: 60px;
`;

export const RAMButton = styled(Button)`
  position: absolute;
  font-size: 0.8rem;
  top: 35px;
  left: 420px;
  height: 60px;
  width: 60px;
`;

export const ProgramMemoryButton = styled(Button)`
  position: absolute;
  font-size: 0.8rem;
  top: 105px;
  left: 350px;
  height: 120px;
  width: 130px;
`;

export const EEPROMButton = styled(Button)`
  position: absolute;
  font-size: 0.8rem;
  top: 235px;
  left: 350px;
  height: 60px;
  width: 130px;
`;

export const ResetButton = styled(Button)`
  position: absolute;
  font-size: 0.8rem;
  bottom: 75px;
  left: 350px;
  height: 30px;
  width: 130px;
`;
export const PowerSupplyButton = styled(Button)`
  position: absolute;
  font-size: 0.7rem;
  bottom: 35px;
  right: 30px;
  left: 350px;
  width: 130px;
`;
