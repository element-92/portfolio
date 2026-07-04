import "@testing-library/jest-dom/vitest";

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// @ts-expect-error jsdom has no IntersectionObserver implementation
window.IntersectionObserver = MockIntersectionObserver;
