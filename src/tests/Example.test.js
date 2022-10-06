describe("간단한 테스트들", () => {
  it("2 더하기 2는 4", () => {
    expect(2 + 2).toBe(4);
  });
  test("2 나누기 2는 1", () => {
    expect(2 / 2).toBe(1);
  });
});

// 테스트 파일 생성

/// <파일명>.test.js | <파일명>.spec.js 으로 생성하면, Jest 가 테스트 파일로 판단하여 작동합니다.

// 용법

/// Test Suites : describe() 함수
//// it() 함수나 test() 함수를 하나의 파일에 여러개 포함시킬 수 있습니다.

/// Test(Test Case) : it() 함수 | test() 함수
//// 첫번째 인자, 테스트에 대한 설명 : string
//// 두번째 인자, 테스트의 내용 : Function

/// toBe() metchers 함수
//// expect 함수 인자의 값이 toBe 함수의 인자와 일치하는지 체크합니다.
