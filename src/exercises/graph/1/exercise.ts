import { ExerciseContext } from "../../../lib/Exercise";
import { skipExercise } from "../../../lib/skipExercise";

const mixed =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

const asyncAwait =
  ({ createPromise }: ExerciseContext) =>
  async () => {
    await createPromise("A");
    await createPromise("B");
    await createPromise("C");
    await createPromise("D");
  };

const thenCatch =
  ({ createPromise }: ExerciseContext) =>
  async () => {
    return createPromise("A")
      .then(() => createPromise("B"))
      .then(() => createPromise("C"))
      .then(() => createPromise("D"));
  };

export default {
  makeMixedExercise: skipExercise(mixed),
  makeAsyncAwaitExercise: asyncAwait,
  makeThenCatchExercise: thenCatch,
};
