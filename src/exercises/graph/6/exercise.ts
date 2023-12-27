import { ExerciseContext } from "../../../lib/Exercise";
import { skipExercise } from "../../../lib/skipExercise";

const mixed =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

const asyncAwait =
  ({ createPromise }: ExerciseContext) =>
  async () => {
    await createPromise("A");

    const PB = createPromise("B");
    const PC = createPromise("C");
    const PD = createPromise("D");

    const PE = async () => {
      await Promise.all([PB, PC]);
      await createPromise("E");
    };

    const PF = async () => {
      await Promise.all([PC, PD]);
      await createPromise("F");
    };

    await Promise.all([PE(), PF()]);
  };

const thenCatch =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

export default {
  makeMixedExercise: skipExercise(mixed),
  makeAsyncAwaitExercise: asyncAwait,
  makeThenCatchExercise: skipExercise(thenCatch),
};
