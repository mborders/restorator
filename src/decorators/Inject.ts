
export function Inject(type: any) {  
  function decorator(target: any, property: string) {
    target[property] = new type();
  }

  return decorator;
}