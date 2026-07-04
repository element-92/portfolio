import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import { navLinks, profile } from "@/data/resume";

describe("App", () => {
  it("renders the hero with name and headline", () => {
    render(<App />);
    expect(screen.getAllByText(profile.name).length).toBeGreaterThan(0);
    expect(screen.getAllByText(profile.headline).length).toBeGreaterThan(0);
  });

  it("renders every nav section as an anchor target", () => {
    render(<App />);
    for (const link of navLinks) {
      const id = link.href.replace("#", "");
      expect(document.getElementById(id)).not.toBeNull();
    }
  });

  it("renders resume download, GitHub, and LinkedIn links", () => {
    render(<App />);
    expect(
      screen.getAllByRole("link", { name: /download resume/i }).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: /github/i }).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: /linkedin/i }).length,
    ).toBeGreaterThan(0);
  });
});
