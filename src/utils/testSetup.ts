import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { setupServer } from "msw/node";
import { afterEach, expect } from "vitest";
import { handlers } from "./testUtils";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

export const server = setupServer(...handlers);

// runs a cleanup after each test case (e.g. clearing jsdom)
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  cleanup();
  server.resetHandlers();
});

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Clean up after the tests are finished.
afterAll(() => server.close());
