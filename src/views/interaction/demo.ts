
export interface Handler {
  setNext(handler: Handler): Handler;

  handle(request: string): string;
}


export abstract class AbstractHandler implements Handler {
  private nextHandler!: Handler;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): any {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}


// tslint:disable-next-line:max-classes-per-file
export class MonkeyHandler extends AbstractHandler {
  public handle(request: string): string {
    if (request === 'Banana') {
      return `Monkey: I'll eat the ${request}.`;
    }
    return super.handle(request);

  }
}
// tslint:disable-next-line:max-classes-per-file
export class SquirrelHandler extends AbstractHandler {
  public handle(request: string): string {
    if (request === 'Nut') {
      return `Squirrel: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}
// tslint:disable-next-line:max-classes-per-file
export class DogHandler extends AbstractHandler {
  public handle(request: string): string {
    if (request === 'MeatBall') {
      return `Dog: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}




