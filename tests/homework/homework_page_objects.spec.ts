import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { RegisterPage } from "../../src/pages/tredgate-eshop/register_page";

test.describe("Tredgate Eshop - Registration Homework", () => {
  test("Should fill registration text fields with Faker data and submit", async ({
    page,
  }) => {
    const registerPage = new RegisterPage(page);

    // Generate random user data using Faker
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });
    const telephone = faker.string.numeric(9);
    const password = faker.internet.password({ length: 10 });

    // 1. Open eshop
    await registerPage.openEshop();

    // 2. Navigate to registration (click MyAccount icon and then Register)
    await registerPage.goToRegister();

    // 3. Fill the registration form (text fields ONLY)
    await registerPage.fillRegistrationForm(
      firstName,
      lastName,
      email,
      telephone,
      password,
    );

    // 4. Click the submit button
    await registerPage.submitForm();
  });
});
