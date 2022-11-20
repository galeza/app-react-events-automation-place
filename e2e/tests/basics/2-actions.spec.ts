import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
});
test.skip("Test - type value to input", async ({ page }) => {
  // await page.getByTestId("username-input").type("user");
  await page.getByTestId("username-input").fill("user");
  await page.waitForTimeout(2 * 1000);
});

test.skip("Test - focus", async ({ page }) => {
  await page.getByTestId("username-input").focus();
  await page.waitForTimeout(1 * 1000);
});

test.skip("Test click", async ({ page }) => {
  await page.getByTestId("button-login").click();
  await page.waitForTimeout(1 * 1000);
});

test.skip("Test hoover", async ({ page }) => {
  await page.getByTestId("button-login").hover();
  await page.waitForTimeout(1 * 1000);
});

test.skip("Test - get input value", async ({ page }) => {
  await page.getByTestId("username-input").type("user");
  const inputValue = await page.getByTestId("username-input").inputValue();
  console.log(inputValue);
});

test("Test - get by Title", async ({ page }) => {
  const title = await page.title();
  //await expect(page.title()).toBe("CanTest network");
  expect(title).toBe("CanTest network");
});
