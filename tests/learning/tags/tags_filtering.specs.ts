// tests/learning/tags/tags_filtering.spec.ts
import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

test("Tag Test", { tag: "@mujTag" }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.open();
});

test("Without Tag Test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.open();
});

test.describe("Suite with Tag", { tag: "@mujTag" }, () => {
  test("Tagged test inside describe 1", async ({ page }) => {
    const loginPage = new LoginPage(page);
    loginPage.open();
  });

  test("Tagged test inside describe 2", async ({ page }) => {
    const loginPage = new LoginPage(page);
    loginPage.open();
  });
});
