import { test, expect } from "@playwright/test";

// w srodku callback
test.beforeEach(() => {
  console.log("BEFORE EACH");
});
test("", async ({ page }) => {});
