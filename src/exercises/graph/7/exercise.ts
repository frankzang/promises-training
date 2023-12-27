import { ExerciseContext } from "../../../lib/Exercise";
import { skipExercise } from "../../../lib/skipExercise";

const mixed =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

const asyncAwait =
  ({ createPromise }: ExerciseContext) =>
  async () => {
    const PA = createPromise("A");
    const PB = createPromise("B");

    const PD = async () => {
      await Promise.all([PA, PB]);
      await createPromise("D");
    };

    const PE = async () => {
      await PA;
      await Promise.all([createPromise("C"), PB]);
      await createPromise("E");
    };

    await Promise.all([PD(), PE()]);
  };

const thenCatch =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

export default {
  makeMixedExercise: skipExercise(mixed),
  makeAsyncAwaitExercise: asyncAwait,
  makeThenCatchExercise: skipExercise(thenCatch),
};
