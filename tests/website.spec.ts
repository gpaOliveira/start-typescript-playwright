import test from './base';

test.describe('Website test', { tag: ['@Tag'] }, () => {
  test.beforeEach(async ({ web }) => {
    await web.navigate();
  });

  test('Navigate', async ({ step, web }) => {
    await step.in('open the website', async () => {
      await web.expectVisible();
    });
  });
});
