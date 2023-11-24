import { isEqual } from "lodash";
import { promiseResult } from "./promiseResult";

export const match = <T>(
  actualResult: unknown,
  expectedResult: unknown,
  handler: () => T
) => {
  if (!isEqual(actualResult, expectedResult)) {
    return;
  }

  return promiseResult(Promise.resolve(handler()));
};
