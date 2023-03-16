import { newE2EPage } from '@stencil/core/testing';

describe('bs-tooltips', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-tooltips></bs-tooltips>');

    const element = await page.find('bs-tooltips');
    expect(element).toHaveClass('hydrated');
  });
});
