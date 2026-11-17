import { Page, Locator } from "@playwright/test";

export class RegisterPage {
  readonly page: Page;
  readonly myAccountIcon: Locator;
  readonly registerLink: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly passwordConfirmInput: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccountIcon = page.locator("#top-links a i.fa-user");
    this.registerLink = page.locator(
      '.dropdown-menu a[href="https://tredgate.com/eshop/index.php?route=account/register"]',
    );
    this.firstNameInput = page.locator("#input-firstname");
    this.lastNameInput = page.locator("#input-lastname");
    this.emailInput = page.locator("#input-email");
    this.telephoneInput = page.locator("#input-telephone");
    this.passwordInput = page.locator("#input-password");
    this.passwordConfirmInput = page.locator("#input-confirm");
    this.continueButton = page.locator('input[type="submit"]');
  }

  async openEshop() {
    await this.page.goto("https://tredgate.com/eshop/");
  }

  async goToRegister() {
    await this.myAccountIcon.click();
    await this.registerLink.click();
  }

  async fillRegistrationForm(
    firstName: string,
    lastName: string,
    email: string,
    telephone: string,
    password: string,
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.telephoneInput.fill(telephone);
    await this.passwordInput.fill(password);
    await this.passwordConfirmInput.fill(password);
  }

  async submitForm() {
    await this.continueButton.click();
  }
}
