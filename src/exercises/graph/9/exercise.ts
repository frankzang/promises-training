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
    const PC = createPromise("C");
    let createdPD: Promise<unknown> | undefined = undefined;

    const PD = async () => {
      await PA;
      createdPD ??= createPromise("D");

      return createdPD;
    };

    const PG = async () => {
      const PE = async () => {
        await PB;
        await createPromise("E");
      };

      const PF = async () => {
        await PD();
        await createPromise("F");
      };

      await Promise.all([PF(), PE(), PC]);

      await createPromise("G");
    };

    const PH = async () => {
      await Promise.all([PB, PC, PD()]);

      await createPromise("H");
    };

    await Promise.all([PG(), PH()]);
  };

const thenCatch =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

export default {
  makeMixedExercise: skipExercise(mixed),
  makeAsyncAwaitExercise: asyncAwait,
  makeThenCatchExercise: skipExercise(thenCatch),
};
