import { type Locator, type Page } from "@playwright/test";
export class SettingsPage {
  readonly page: Page;
  getLogoutLink: Locator;
  getShortBioDescription: Locator;
  getUpdateSettings: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getLogoutLink = page.locator(
      '//button[normalize-space()="Or click here to logout."]'
    );
    this.getShortBioDescription = page.locator("textarea[placeholder='Short bio about you']");
    this.getUpdateSettings = page.locator("//button[normalize-space()='Update Settings']");
  }
  async logout() {
    await this.getLogoutLink.click();
  }
  async typeShortBio(bio:string)
  {
    await this.getShortBioDescription.fill(bio);
  }
  async clickUpdateSettings()
  {
    await this.getUpdateSettings.click();
  }
}
