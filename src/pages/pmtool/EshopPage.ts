import { Page, Locator } from "@playwright/test";

export class EshopPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly iphoneLink: Locator;
  readonly addToCartButton: Locator;
  readonly successAlert: Locator;

  constructor(page: Page) {
    this.page = page;

    // Extracting locators into class properties
    this.searchInput = page.locator('[name="search"]');
    this.searchButton = page.locator('#search [type="button"]');
    this.iphoneLink = page.locator('//a[text()="iPhone"]');
    this.addToCartButton = page.locator("#button-cart");
    this.successAlert = page.locator(".alert-success");
  }

  // Actions using the extracted locators
  async goto() {
    await this.page.goto("https://tredgate.com/eshop/");
  }

  async searchForProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async openIphoneDetail() {
    await this.iphoneLink.click();
  }

  async addIphoneToCart() {
    await this.addToCartButton.click();
  }
}
