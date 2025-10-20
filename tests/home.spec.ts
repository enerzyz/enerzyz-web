import { expect, test } from "@playwright/test";

const heroHeadline = /Orchestrate\s+energy assets\s+with prophetic precision/i;

test.describe("Enerzyz marketing site", () => {
  test("renders hero headline, video, and CTA", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: heroHeadline })).toBeVisible();
    await expect(
      page.getByRole("link", { name: /experience it/i }).first(),
    ).toBeVisible();

    const backgroundVideo = page.locator("video");
    await expect(backgroundVideo).toBeVisible();
    await expect(backgroundVideo).toHaveAttribute("muted", "");
  });

  test("shows feature metrics", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Decision latency").first()).toBeVisible();
    await expect(page.getByText("Carbon intensity").first()).toBeVisible();
    await expect(page.getByText("Reliability").first()).toBeVisible();
  });
});
