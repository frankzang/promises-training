import { ExerciseContext } from "../../../lib/Exercise";
import { skipExercise } from "../../../lib/skipExercise";

const mixed =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

const asyncAwait =
  ({ createPromise }: ExerciseContext) =>
  async () => {
    const BCE = async () => {
      await Promise.all([createPromise("B"), createPromise("C")]);

      await createPromise("E");
    };
    await createPromise("A");
    await Promise.all([BCE(), createPromise("D")]);
  };

const thenCatch =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

export default {
  makeMixedExercise: skipExercise(mixed),
  makeAsyncAwaitExercise: asyncAwait,
  makeThenCatchExercise: skipExercise(thenCatch),
};
