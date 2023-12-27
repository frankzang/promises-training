import { ExerciseContext } from "../../../lib/Exercise";
import { skipExercise } from "../../../lib/skipExercise";

const mixed =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

const asyncAwait =
  ({ createPromise }: ExerciseContext) =>
  async () => {
    const PA = async () => {
      await createPromise("A");
      await Promise.all([createPromise("B"), createPromise("C")]);
      await createPromise("D");
    };

    const PE = async () => {
      await createPromise("E");
      await Promise.all([createPromise("F"), createPromise("G")]);
      await createPromise("H");
    };

    await Promise.all([PA(), PE()]);
  };

const thenCatch =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

export default {
  makeMixedExercise: skipExercise(mixed),
  makeAsyncAwaitExercise: asyncAwait,
  makeThenCatchExercise: skipExercise(thenCatch),
};
