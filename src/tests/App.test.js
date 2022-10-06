import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/test code practice/i);
  expect(linkElement).toBeInTheDocument();
});

// 기본 테스트 코드 분석

/// 개요

//// render : react-testing-library 에서 테스트를 진행할 컴포넌트를 전달해주는 함수
//// getByText : screen 의 다양한 메서드 중 하나, App 컴포넌트 중 인자에 해당하는 문자열이 있는 컴포넌트(엘레먼트)를 확인하여 할당 해줍니다.
//// expect : toBeInTheDocument() 'matchers 함수'를 사용하여 expect 함수의 인자로 지정된 요소가 document.body 에 존재하는지 체크합니다.

/// 함수의 라이브러리

//// jest : test(), expect()
//// jest-dom : toBeInTheDocument()

//// jest-dom 은 ./setupTests 에 import 되어 있습니다.
