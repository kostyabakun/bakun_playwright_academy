// tests/learning/debugging/failing.spec.ts

import { expect, test } from "@playwright/test";
import { LoginPage } from "login_page.ts";

test("Failing", async ({ page }) => {
  const loginPage = new LoginPage();
  await page.goto("https://tredgate.com/pmtool");
  //   expect(page.locator("#not_existing")).toBeVisible();
  await page.locator("#NoOo").click();
});
