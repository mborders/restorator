import { Controllers, Controller, HttpController } from './decorators/Controller';
import { IHttpMethod, HttpMethods, HttpGet, HttpPost, HttpPut, HttpDelete } from './decorators/HttpMethod';

import * as express from 'express';

export class HttpContainer {
  constructor() {}
  
  register (router: express.Router) {
    const controllers: HttpController[] = Controllers;
    const decorators: IHttpMethod[] = HttpMethods;

    for (let i in decorators) {
      const decorator: IHttpMethod = decorators[i];
      
      for (let j in controllers) {
        const controller: HttpController = controllers[j];

        if (controller.targetClass === decorator.targetClass) {
          const path = `${controller.path}${decorator.path}`;
          console.log(`${decorator.method} ${path}`);

          switch (decorator.method) {
            case 'GET':
              router.get(path, decorator.fcn);
              break;
            case 'POST':
              router.post(path, decorator.fcn);
              break;
            case 'PUT':
              router.put(path, decorator.fcn);
              break;
            case 'DELETE':
              router.delete(path, decorator.fcn);
              break;
          }
        }
      }
    }
  }
}