export interface HttpController {
  targetClass: any;
  path: string;
}

export const Controllers: HttpController[] = [];

export function Controller(type: any, path: string) {
  return function(target: Object) {
    Controllers.push({
      targetClass: type.name,
      path
    });
  };
}