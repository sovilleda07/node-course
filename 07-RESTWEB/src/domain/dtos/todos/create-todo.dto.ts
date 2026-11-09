export class CreateTodoDTO {
  // Al hacerlo private solo se va a poder llamar dentro de un método estático de nuestra clase
  private constructor(public readonly text: string) {}

  static create(
    props: { [key: string]: any } = {},
  ): [string, undefined] | [undefined, CreateTodoDTO] {
    const { text } = props;

    if (!text) return ['Text property is required', undefined];

    return [undefined, new CreateTodoDTO(text)];
  }
}
