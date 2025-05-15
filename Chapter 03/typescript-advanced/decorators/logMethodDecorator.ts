// Prompt Used: Create a decorator in TypeScript that logs method calls with arguments and return values

function LogMethodCalls(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Calling ${propertyKey} with arguments:`, args);
      const result = originalMethod.apply(this, args);
      console.log(`Returned from ${propertyKey}:`, result);
      return result;
    };
    return descriptor;
  }
  
  // Example usage
  class ExampleClass {
    @LogMethodCalls
    add(a: number, b: number): number {
      return a + b;
    }
  }
  
  const example = new ExampleClass();
  example.add(5, 3); // Logs method name, arguments, and return value
  