import {
  FaCaretLeft,
  FaCaretRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import styled from "styled-components";

const PaginationContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  font-size: 0.65rem;
  padding: 0.2rem;
`;

const factory = (Component: any = FaChevronLeft) => styled(Component)`
  cursor: pointer;
  height: 1rem;
`;

const Left = factory(FaChevronLeft);

const AllLeft = factory(FaCaretLeft);

const Right = factory(FaChevronRight);

const AllRight = factory(FaCaretRight);

const PageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Page = factory(
  styled.div<{ isActive?: boolean }>`
    padding: 0.2rem;
    font-weight: ${({ isActive }) => isActive && "bold"};
    font-size: 14px;
    margin-top: -0.8rem;
  `
);

const PageInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 0.4rem;
  align-items: center;
  font-size: 14px;
`;

export {
  PaginationContainer,
  Left,
  AllLeft,
  PageContainer,
  Page,
  AllRight,
  Right,
  PageInfo,
};
