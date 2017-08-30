import { Controllers, Controller, HttpController } from './decorators/Controller';
import { IHttpMethod, HttpMethods, HttpGet, HttpPost, HttpPut, HttpDelete } from './decorators/HttpMethod';

import * as express from 'express';

export class HttpContainer {
  constructor() {}
  
  register (router: express.Router) {
    const controllers: HttpController[] = Controllers;
    const decorators: IHttpMethod[] = HttpMethods;

    decorators.forEach((decorator) => {
      controllers.forEach((controller) => {
        if (controller.targetClass === decorator.targetClass) {
          const path = `${controller.path}${decorator.path}`;
          console.log(`[Restorator] Registered ${decorator.method} ${path}`);

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
      });
    });
  }
}