import { type Locator, type Page } from "@playwright/test";
export class HomePage {
  readonly page: Page;
  readonly getTitleText: Locator;
  readonly getNewPostLink: Locator;
  readonly getSettingsLink: Locator;
  readonly getProfileLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getTitleText = page.locator("a", { hasText: "conduit" });
    this.getNewPostLink = page.locator("a", { hasText: " New Post" });
    this.getSettingsLink = page.locator("(//a[@href='#settings'])[1]");
    this.getProfileLink = page.locator("(//img[@class='user-pic'])[1]");
  }
  async clickNewPost() {
    await this.getNewPostLink.click();
  }
  async clickSettings() {
    await this.getSettingsLink.click({force:true});
  }
}
