import { expect, test } from "@playwright/test";

const heroHeadline = /Orchestrate\s+energy assets\s+with prophetic precision/i;

test.describe("Enerzyz marketing site", () => {
  test("renders hero headline, video, and CTA", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: heroHeadline })).toBeVisible();
    await expect(
      page.getByRole("button", { name: /experience it/i }).first(),
    ).toBeVisible();

    const backgroundVideo = page.locator("video");
    await expect(backgroundVideo).toBeVisible();
    await expect(backgroundVideo).toHaveAttribute("muted", "");
  });

  test("shows feature metrics", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText(/model accuracy/i).first()).toBeVisible();
    await expect(page.getByText(/increase efficiency/i).first()).toBeVisible();
    await expect(page.getByText(/unplanned outage/i).first()).toBeVisible();
  });

  test("direct book-a-demo link loads booking form", async ({ page }) => {
    await page.goto("/book-a-demo");

    await expect(
      page.getByRole("heading", { name: /let our engineers chart the path/i }),
    ).toBeVisible();

    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /submit/i })).toBeVisible();
  });
});
