declare var ENV: string;
declare var HMR: boolean;


interface ErrorStackTraceLimit {
  stackTraceLimit: number;
}

interface ErrorConstructor extends ErrorStackTraceLimit { }

interface NodeModule {
  hot: any;
}

// until the npm package delivers a working definition file
interface IConfigureStore {
  (middlewares: Array<any>): any;
}

declare var configureStore: IConfigureStore;


declare namespace jasmine {
    interface Matchers {
        toEqualImmutable(expected: any): void;
    }
}
