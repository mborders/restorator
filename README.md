# Restorator

## Description
REST controller/route and dependency injection decorators for Express-based REST applications

## Usage
### @Controller (type: any, path: string)
* Defines a top-level class contrainer for REST methods
* Takes in a type (which is the class being defined) and a path that will prefix all REST methods contained in the class

### @HttpGet (path: string)
* Defines a GET method at the provided path

### @HttpPost (path: string)
* Defines a POST method at the provided path

### @HttpPut (path: string)
* Defines a PUT method at the provided path

### @HttpDelete (path: string)
* Defines a DELETE method at the provided path

### @Inject (type: any)
* Signals that the given class member should be initialized via injection

### HttpContainer
* Provides a single method called register() that takes in the Express router
* All @Http* and @Controller decorators are automatically registered with the router
