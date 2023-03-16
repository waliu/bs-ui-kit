import { newE2EPage } from '@stencil/core/testing';

describe('bs-collapse', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-collapse></bs-collapse>');

    const element = await page.find('bs-collapse');
    expect(element).toHaveClass('hydrated');
  });
});
