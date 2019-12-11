export function disable(
  target: Object,
  methodName: string,
  descriptor: PropertyDescriptor,
) {
  descriptor.value = () => {
    throw new Error('Method is disabled');
  };
}

// decorator factory
export function before(hook: Function) {
  return function<T extends Function>(
    target: Object,
    methodName: string,
    descriptor: PropertyDescriptor,
  ): PropertyDescriptor {
    return {
      get: function(this: T) {
        let originalMethod = descriptor.value!.bind(this);
        hook = hook.bind(this);
        return () => {
          hook();
          originalMethod();
        };
      },
    };
  };
}

export class Whatever {
  // @disable
  foo() {
    console.log('foo');
  }

  // The factory runs only once, but the decorator will run every time the method is called
  @before(() => {
    console.log('Before Hook');
  })
  bar() {
    console.log('bar');
  }
}

let whatever = new Whatever();
whatever.foo();
whatever.bar();
