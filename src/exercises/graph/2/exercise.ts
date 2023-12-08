import { ExerciseContext } from "../../../lib/Exercise";
import { skipExercise } from "../../../lib/skipExercise";

const mixed =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

const asyncAwait =
  ({ createPromise }: ExerciseContext) =>
  async () => {
    const t1 = async () => {
      await createPromise("A");
      await createPromise("B");
      await createPromise("C");
    };
    const t2 = async () => {
      await createPromise("D");
      await createPromise("E");
      await createPromise("F");
    };

    await Promise.all([t1(), t2()]);
  };

const thenCatch =
  ({ createPromise }: ExerciseContext) =>
  async () => {
    const t1 = async () => {
      return createPromise("A")
        .then(() => createPromise("B"))
        .then(() => createPromise("C"));
    };

    const t2 = async () => {
      return createPromise("D")
        .then(() => createPromise("E"))
        .then(() => createPromise("F"));
    };

    await Promise.all([t1(), t2()]);
  };

export default {
  makeMixedExercise: skipExercise(mixed),
  makeAsyncAwaitExercise: asyncAwait,
  makeThenCatchExercise: thenCatch,
};
