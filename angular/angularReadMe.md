## Angular 2 ===> Angular
* Why Angular 

## Angular Versions 
AngularJS - angular1 is not used now. 
Applies to: Angular 2 to the latest edition of i.e. Angular 8. Angular 9, Angular 10, Angular 11

Angular PreReqs : Javascript, HTML & CSS , TypeScript

## Angular Setup
https://www.tektutorialshub.com/angular/angular-installing-settingup-development-environment/
* 



## AngularJS (angular1) vs Angular (Angular 2.0 + to all vesions)
https://www.tektutorialshub.com/angular/angular-introduction/
* Angular - Full ES6 , fully implmented in Typescript
* Components are new Controllers
    * ```javascript
            //OLD - 
                    //<body ng-controller=’appController’>     
                    //    <h1>vm.message<h1> 
                    //</body> 
                    //Controller angular.module(‘app’).controller(‘appController’,appcontroller) {     
                    //      message=’Hello Angular’; 
                    //}

            //NEW  - COmponent .        
           import { Component } from '@angular/core'; 
 
            @Component({     
                selector: 'app',     
                template: '<h1>{{message}} </h1>' 
            }) 
            export class AppComponent  {
                message: string=’Hello Angular’; 
            }
        ```
* Directives ng-repeat, ng-if have been replaced with *ngIf,*ngFor 
    * Angular 
        * structural directives - starts with *  
        * 


04/15
--- BASICSS
# Node js - V8 engine which can run javascript. 
# Node package Manager   (npm  === similar to MAVEN )    Similar package managers -- YARN
    npm init  
         --> creates package.json
            --> package.json 
                  --> Everything about packages, name, version, scripts version is in  this. 
     node_modules -- folder - dont checking.
    
# Typescript 
## Commands
   //Install typescript
   npm i -g typescript 
   // Create tsconfig.json
      // About what JS should it be converted et.
      // Proprerty target  --> tells which ES version should code be converted to etc. 
      // module  --> where to run code in OS or browser (es2020) or commonjs
      // "strict": true,    --> Enable all strict type-checking options.

   tsc --init
   
   Browsers dont understand TS
      TS --> converted ---> JS
      --> Type Safety 
        Angular, Vue, Express written in typescript, 
        React --> written in Flow language
     Evergreen --> TS converts to 
    
   ### Typescript Datatypes
         string , number, boolean, array , enum, Tuples, Any , enum
         Type Inference  --> TS infers . but avoid
         https://github1s.com/upendra9/development/blob/master/angular/TS-Learn-datatypes.ts
         https://github1s.com/upendra9/development/blob/master/angular/TS-Learn-functions.ts
         Generics 
         https://www.youtube.com/watch?v=3qBXWUpoPHo
   # SPA 
         // Angular, React, Vue
     //SPA doesnot make request for every URL requests
   # Angular 
       Routing 
       SSR  --> Good For SEO 
       SPA  --> 
   # 

      





# Reference Links
1. [Angular Tutorial](https://www.tektutorialshub.com/angular-tutorial/#angular-versions)
2. [Angular Change Logs](https://github.com/angular/angular/blob/master/CHANGELOG.md) 
3. [Angular1 vs 2+ differences and why] https://www.tektutorialshub.com/angular/angular-introduction/
4. 


