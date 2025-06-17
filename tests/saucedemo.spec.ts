import { test, expect } from "@playwright/test";

test("Login, Add to Cart, Checkout on Saucedemo Website", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click(".shopping_cart_link");

  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
});
