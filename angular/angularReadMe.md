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







# Reference Links
1. [Angular Tutorial](https://www.tektutorialshub.com/angular-tutorial/#angular-versions)
2. [Angular Change Logs](https://github.com/angular/angular/blob/master/CHANGELOG.md) 
3. [Angular1 vs 2+ differences and why] https://www.tektutorialshub.com/angular/angular-introduction/
4. 


