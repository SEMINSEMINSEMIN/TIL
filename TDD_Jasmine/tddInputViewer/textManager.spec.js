describe("텍스트 매니저 테스트 입니다.", () => {
  const textmanager = new TextManager();
  it("텍스트 값을 전달합니다.", () => {
    const initValue = textmanager.getValue();
    expect(textmanager.getValue()).toBe(initValue);
  });

  it("텍스트 값을 수정합니다.", () => {
    const testValue = { data: "Hello Zebras!" };
    textmanager.setValue(testValue);
    expect(textmanager.getValue()).toBe(testValue.data);
    // expect(textmanager.getValue()).toBe(testValue);
  });
});
