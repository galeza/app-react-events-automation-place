import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
});
test.skip("Test - To have test", async ({ page }) => {
  await expect(page.locator("h4")).toHaveText("Welcome");
});
test.skip("Test - does not contain a text", async ({ page }) => {
  const header = page.locator("h4");
  header.highlight();
  await expect(page.locator("h4")).not.toHaveText("Welcox");
});
test.skip("1 Test - assertiion soft", async ({ page }) => {
  await expect.soft(page.locator("h4")).toHaveText("Welcome");
});

test.skip("2 Test - assertiion soft", async ({ page }) => {
  await expect(page.locator("h4")).toHaveText("hello");
  await expect(page.locator("h4"), "My custom message").toHaveText("hello");
});

test("Test - toContain", async ({ page }) => {
  const header = await page.locator("h4").textContent();
  await expect(["Hello", "Welcome"]).toContain(header);
});
