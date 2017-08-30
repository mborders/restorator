export interface IHttpMethod {
  method: string;
  path: string;
  targetClass: any;
  fcn: any;
}

export const HttpMethods: IHttpMethod[] = [];

export const HttpMethod = (method: string, path: string) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    HttpMethods.push({
      method,
      path,
      targetClass: target.constructor.name,
      fcn: target[propertyKey]
    });
  }
}

export const HttpGet = (path: string) => HttpMethod('GET', path);
export const HttpPost = (path: string) => HttpMethod('POST', path);
export const HttpPut = (path: string) => HttpMethod('PUT', path);
export const HttpDelete = (path: string) => HttpMethod('DELETE', path);