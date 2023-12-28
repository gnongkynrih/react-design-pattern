import styled from "styled-components";

interface SplitScreenProps {
  children: React.ReactNode[];
  leftWidth?: number;
  rightWidth?: number;
}
interface PanelProps {
  flex: number;
}
const Container = styled.div`
  display: flex;
`;
const Panel = styled.div<PanelProps>`
  flex: ${(props) => props.flex};
`;

export const SplitScreen: React.FC<SplitScreenProps> = ({
  children,
  leftWidth = 1,
  rightWidth = 1,
}) => {
  const [left, right] = children;
  return (
    <Container>
      <Panel flex={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};
