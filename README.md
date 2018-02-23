# Portfolio

Personal portfolio [website](www.stefangrasu.com).
This project was created with the following frameworks 
- [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.
- [BootStrap](https://getbootstrap.com) version 4.0.0
- [ng-masonry-grid](https://github.com/Shailu4u/ng-masonry-grid) version 1.2.3

## Photo Assets
Photo assets are served during development from the assets folder, but for production they are maintained in a seperate amazon bucket. As a result, the photos directory must be removed from the assets list of the [.angular-cli.json](.angular-cli.json) file before creating the development build of the project. In addition, the path to the production photos must be specified in the production environment [file](src/environments/environment.prod.ts)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

