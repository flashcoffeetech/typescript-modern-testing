import { vi } from "vitest";

export const promises = {
  writeFile: vi.fn((path: string, data: any) => {
    console.log("Tes");
    return new Promise<void>((resolve, reject) => {
      resolve();
    });
  }),
};
