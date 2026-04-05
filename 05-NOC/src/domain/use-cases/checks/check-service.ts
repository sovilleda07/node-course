interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceUseCase {
  // Inyección de dependencias (Añadirle dependencias a la clase)
  // no es más que colocar una dependencia
  // en nuestros casos de usos o en nuestros repositorios o data sources
  // o en cualquier parte de nuestra apliación.
  // En JS se realiza con un Factory Function
  constructor(
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback,
  ) {}

  // Public porque se necesita hacer una inyección.
  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);

      if (!req.ok) {
        throw new Error(`Error on check service ${url}`);
      }

      this.successCallback();
      return true;
    } catch (error) {
      console.log(`${error}`);

      this.errorCallback(`${error}`);
      return false;
    }
  }
}
