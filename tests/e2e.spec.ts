import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { ArticlePage } from "../pages/articlePage";
import { SettingsPage } from "../pages/settingsPage";
import * as userData from "../tests-data/login.json";
import * as articleData from "../tests-data/createArticle.json";

test.beforeEach(async ({ page }) => {
  const loginObject = new LoginPage(page);
  await loginObject.goTo();
  await loginObject.login(userData.email, userData.password);
});
test.afterAll(async ({ page }) => {
  await page.close();
});

test("Verify user is able to create an article @regression", async ({
  page,
}) => {
  const articlePage = new ArticlePage(page);
  const homePage = new HomePage(page);
  //verifying the home page title text
  expect(homePage.getTitleText).toHaveText("conduit");
  //Click on new post
  await homePage.clickNewPost();
  //Create an Article
  await articlePage.createAnArticle(
    articleData.articleTitle,
    articleData.articleAbout,
    articleData.articleDescription,
    articleData.articleTags
  );
  //verify user is taken to article details page once an article is created successfully
  await expect(page).toHaveURL(/.*article/);
  //Delete the article, so that the same data set can be used multiple times
  await articlePage.deleteArticle();
});

test("Verify user is able to update settings @smoke", async ({ page }) => {
  const homePage = new HomePage(page);
  const settingsPage = new SettingsPage(page);
  homePage.clickSettings();
  settingsPage.typeShortBio("Hi");
  settingsPage.clickUpdateSettings();
});
