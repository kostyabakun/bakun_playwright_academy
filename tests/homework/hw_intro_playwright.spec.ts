import { test, expect } from "@playwright/test";
import { EshopPage } from "../../src/pages/pmtool/EshopPage.ts";

test("Search and add iPhone to cart", async ({ page }) => {
  // Initialize the Page Object
  const eshopPage = new EshopPage(page);

  // 1. Open Tredgate Eshop
  await eshopPage.goto();

  // 2 & 3. Search for "iPhone" and click search button
  await eshopPage.searchForProduct("iPhone");

  // 4. Open the iPhone detail page
  await eshopPage.openIphoneDetail();

  // 5. Add the iPhone to the cart
  await eshopPage.addIphoneToCart();

  // Verify that the product was successfully added to the cart
  await expect(eshopPage.successAlert).toBeVisible();
});
