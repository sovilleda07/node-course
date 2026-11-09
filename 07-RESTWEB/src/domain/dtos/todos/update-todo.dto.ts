export class UpdateTodoDTO {
  private constructor(
    public readonly id: number,
    public readonly text?: string,
    public readonly completedAt?: Date | null,
  ) {}

  get values() {
    const returnObj: { text?: string; completedAt?: Date | null } = {};
    if (this.text !== undefined) returnObj.text = this.text;
    if (this.completedAt !== undefined)
      returnObj.completedAt = this.completedAt;

    return returnObj;
  }

  static create(
    props: Record<string, unknown> = {},
  ): [string, undefined] | [undefined, UpdateTodoDTO] {
    const { id, text, completedAt } = props;
    const numericId = Number(id);

    if (
      (typeof id !== 'string' && typeof id !== 'number') ||
      id === '' ||
      !Number.isInteger(numericId) ||
      numericId <= 0
    ) {
      return ['id must be a valid number', undefined];
    }

    if (text !== undefined && (typeof text !== 'string' || !text.trim())) {
      return ['Text must be a non-empty string', undefined];
    }

    let newCompletedAt: Date | null | undefined;
    if (completedAt === null) {
      newCompletedAt = null;
    } else if (completedAt !== undefined) {
      if (typeof completedAt !== 'string' && !(completedAt instanceof Date)) {
        return ['CompletedAt must be a valid date', undefined];
      }

      newCompletedAt =
        completedAt instanceof Date ? completedAt : new Date(completedAt);
      if (Number.isNaN(newCompletedAt.getTime())) {
        return ['CompletedAt must be a valid date', undefined];
      }
    }

    return [undefined, new UpdateTodoDTO(numericId, text, newCompletedAt)];
  }
}
