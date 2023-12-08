import { ExerciseContext } from "../../../lib/Exercise";
import { skipExercise } from "../../../lib/skipExercise";

const mixed =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

const asyncAwait =
  ({ createPromise }: ExerciseContext) =>
  async () => {
    const BD = async () => {
      await createPromise("B");
      await createPromise("D");
    };

    const CE = async () => {
      await createPromise("C");
      await createPromise("E");
    };

    await createPromise("A");

    await Promise.all([BD(), CE()]);

    await createPromise("F");
  };

const thenCatch =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

export default {
  makeMixedExercise: skipExercise(mixed),
  makeAsyncAwaitExercise: skipExercise(asyncAwait),
  makeThenCatchExercise: skipExercise(thenCatch),
};
