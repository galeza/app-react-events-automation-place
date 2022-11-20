import { Locator, Page } from "@playwright/test";

export class EventPage {
  page: Page;
  menu: Locator;
  logoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menu = page.getByTestId("user-name-text");
    this.logoutBtn = page.getByTestId("logout");
  }

  async logout() {
    await this.menu.click();
    await this.logoutBtn.click();
  }
}
