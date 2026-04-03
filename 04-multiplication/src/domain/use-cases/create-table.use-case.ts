// Reglas de negocio que queremos obligatoriamente forzar a esta clase a que implemente
export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  // Inyectarle al caso de uso la forma en que queremos que cree la data del archivo o que queremos que haga basado en dependecias externas
  constructor() {
    /**
     * DI - Dependency Injection
     */
  }

  execute({ base, limit = 10 }: CreateTableOptions) {
    let outputMessage = '';
    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} X ${i} = ${base * i}`;

      if (i < limit) outputMessage += '\n';
    }
    return outputMessage;
  }
}
