import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute logFn if provided", () => {
    // spy function
    const logger = vi.fn();
    // use this, if need different implementation on specific file
    // logger.mockImplementationOnce(() => {});
    // spies
    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});
