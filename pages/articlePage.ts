import { type Locator, type Page } from "@playwright/test";
export class ArticlePage {
  readonly page: Page;
  readonly getArticleTitle: Locator;
  readonly getArticleAbout: Locator;
  readonly getArticleDescription: Locator;
  readonly getArticleTags: Locator;
  readonly getPublishButton: Locator;
  readonly getDeleteArticleButton: Locator;
  readonly getEditArticleButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getArticleTitle = page.locator('input[placeholder="Article Title"]');
    this.getArticleAbout = page.locator(
      'input[placeholder="What\'s this article about?"]'
    );
    this.getArticleDescription = page.locator(
      'textarea[placeholder="Write your article (in markdown)"]'
    );
    this.getArticleTags = page.locator('input[placeholder="Enter tags"]');
    this.getPublishButton = page.locator(
      '//button[normalize-space()="Publish Article"]'
    );
    this.getDeleteArticleButton = page.locator(
      '//button[normalize-space()="Delete Article"]'
    );
    this.getEditArticleButton = page.locator("//a[normalize-space()='Edit Article']");
  }
  async createAnArticle(
    articleTitle: string,
    articleAbout: string,
    articleDescription: string,
    articleTags: string
  ) {
    await this.getArticleTitle.type(articleTitle);
    await this.getArticleAbout.type(articleAbout);
    await this.getArticleDescription.type(articleDescription);
    await this.getArticleTags.type(articleTags);
    await this.getPublishButton.click();
  }
  async deleteArticle() {
    await this.getDeleteArticleButton.click();
  }
  async clickEditArticle()
  {
    await this.getEditArticleButton.click();
  }
}
