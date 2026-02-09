import { TestInfoPage } from '@common/TestInfoPage';
import { BrowserContext, Locator, Page, expect, test as baseTest } from '@playwright/test';

export class WebsitePage {
  readonly someButton: Locator;
  constructor(
    readonly page: Page,
    readonly context: BrowserContext,
    readonly testInfoPage: TestInfoPage,
  ) {
    this.someButton = this.page.getByRole('button', { name: 'Close' });
  }

  async navigate(): Promise<void> {
    this.page.goto('/');
  }

  async expectVisible() {
    await expect(this.page.getByText('Example Domain')).toBeVisible();
  }
}

export const test = baseTest.extend<{
  web: WebsitePage;
  testInfoPage: TestInfoPage;
}>({
  web: async ({ page, context, testInfoPage }, use) => {
    await use(new WebsitePage(page, context, testInfoPage));
  },
});
