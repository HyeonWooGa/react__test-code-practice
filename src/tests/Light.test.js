import { fireEvent, render, screen } from "@testing-library/react";
import Light from "../components/Light";

describe("Light Component", () => {
  it("renders Light Component", () => {
    render(<Light name="전원" />);
    const nameElement = screen.getByText(/전원 off/i);
    expect(nameElement).toBeInTheDocument();
  });

  it("off button disabled", () => {
    render(<Light name="전원" />);
    const offButtonElement = screen.getByRole("button", { name: /off/i });
    expect(offButtonElement).toBeDisabled();
  });

  it("on button enable", () => {
    render(<Light name="전원" />);
    const onButtonElement = screen.getByRole("button", { name: /on/i });
    expect(onButtonElement).toBeEnabled();
  });

  it("change from off to on", () => {
    render(<Light name="전원" />);
    const onButtonElement = screen.getByRole("button", { name: /on/i });
    fireEvent.click(onButtonElement);
    expect(onButtonElement).toBeDisabled();
  });
});

// Light 컴포넌트 테스트 파일

/// 테스트 목록
//// 컴포넌트 존재 여부
//// OFF 버튼 Disabled 여부
//// ON 버튼 Enabled 여부
//// ON 버튼 클릭 이벤트 발생시 Disabled로 전환 여부
