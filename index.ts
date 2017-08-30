import * as RestoratorHttpContainer from './src/HttpContainer';
import * as RestoratorController from './src/decorators/Controller';
import * as RestoratorHttpMethod from './src/decorators/HttpMethod';
import * as RestoratorInject from './src/decorators/Inject';

export const Controller = RestoratorController.Controller;
export const HttpContainer = RestoratorHttpContainer.HttpContainer;
export const HttpGet = RestoratorHttpMethod.HttpGet;
export const HttpPost = RestoratorHttpMethod.HttpPost;
export const HttpPut = RestoratorHttpMethod.HttpPut;
export const HttpDelete = RestoratorHttpMethod.HttpDelete;
export const Inject = RestoratorInject.Inject;
