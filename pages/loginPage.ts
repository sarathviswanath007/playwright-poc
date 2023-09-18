import { type Locator, type Page } from "@playwright/test";
export class LoginPage {
  readonly page: Page;
  readonly getEmail: Locator;
  readonly getPassword: Locator;
  readonly getSignIn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getEmail = page.locator('input[type="email"]');
    this.getPassword = page.locator('input[type="password"]');
    this.getSignIn = page.locator('button[type="submit"]');
  }
  async goTo() {
    await this.page.goto("https://react-redux.realworld.io/#/login?_k=bmy7as");
  }
  async login(email: string, password: string) {
    await this.getEmail.type(email);
    await this.getPassword.type(password);
    await this.getSignIn.click({ force: true });
  }
}
