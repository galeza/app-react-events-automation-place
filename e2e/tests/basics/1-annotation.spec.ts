import { test, expect } from "@playwright/test";

// test("homepage has title and links to intro page", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Expect a title "to contain" a substring. regex
//   await expect(page).toHaveTitle(/Playwright/);
//   const pageTitle = await page.title();
//   expect(pageTitle.includes("Playwright")).toBeTruthy;

//   // create a locator
//   const getStarted = page.getByRole("link", { name: "Get started" });

//   // Expect an attribute "to be strictly equal" to the value.
//   //promisa
//   await expect(getStarted).toHaveAttribute("href", "/docs/intro");

//   // Click the get started link.
//   await getStarted.click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro-test/);
// });

test("TEST - 1", async () => {
  console.log("Test 1");
});

// test.only("TEST - only", async () => {
//   console.log("Test only");
// });
test.skip("TEST - skip", async () => {
  console.log("Test skip");
});

test("TEST - skip browser", async ({ browserName }) => {
  test.skip(browserName === "chromium", "skipping chromium browser");
  console.log(`Test skip Running on ${browserName}`);
});

//test groups
test.describe("Test - group", () => {
  test("test - group 1", async () => {
    console.log("Test - group 1");
  });
  test("test - group 2", async () => {
    console.log("Test - group 2");
  });
});

test.describe("Test - group skip", () => {
  test.skip(
    ({ browserName }) => browserName === "chromium",
    "Skipping chromium browser"
  );

  test("test - group 1", async ({ browserName }) => {
    console.log(`Test - group 1 skipping run on ${browserName}`);
  });
  test("test - group 2", async ({ browserName }) => {
    console.log(`Test - group 2 skipping run on ${browserName}`);
  });
});

// est @tag

test("test - tag @smoke", async () => {
  console.log("test - tag @smoke");
});
