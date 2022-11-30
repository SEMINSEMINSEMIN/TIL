import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("버튼이 제대로 동작하고 있습니까?", () => {
  render(<App />); // 가상 돔 생성
  // screen: 가상 돔에 접근하기 위한 전역 객체
  // getByText: 텍스트 노드를 찾는다. 정규 표현식(i: 대소문자 구분 x)
  // const linkElement = screen.getByText(/learn react/i);
  // toBeInTheDocument: 문서 안에 있는가?
  // expect(linkElement).toBeInTheDocument();

  // WAI-ARIA
  // button의 역할을 하는 요소를 검색하며, 요소 안의 텍스는 'change to blue!'여야 합니다.
  const button = screen.getByRole("button", { name: "change to blue!" });

  // toHaveStyle: 이 버튼이 이 스타일을 가지길 기대하고 있다.
  // button 요소의 배경색이 red 이길 기대한다.
  expect(button).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button.textContent).toBe("change to red!");
});
