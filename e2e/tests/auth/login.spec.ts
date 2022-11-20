import { expect, test } from "@playwright/test";
import { LoginPage, EventPage } from "../../pages";
import { getUser, Users } from "../../config";

let loginPage: LoginPage;
test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  //await page.goto("/login");
});

test.skip("A - Login", async ({ page }) => {
  await loginPage.usernameInput.type("user");

  const userNameInput = page.getByTestId("username-input");
  await userNameInput.clear();
  await userNameInput.type("user");
  const passwordInput = page.getByTestId("password-input");
  await passwordInput.clear();
  await passwordInput.type("password");
  await page.getByTestId("button-login").click();
  await expect(page.getByTestId("user-name-text")).toHaveText("Event Manager");
  //await page.waitForTimeout(1 * 1000);
});

test.skip("B - Login", async ({ page }) => {
  const { fullName } = getUser(Users.Admin);
  loginPage.login(Users.Admin);
});

test.skip("logout", async ({ page }) => {
  const { fullName } = getUser(Users.Admin);
  loginPage.login(Users.Admin);
  const eventPage = new EventPage(page);
  eventPage.logout();
});
