function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{yVo5:function(e,n,t){"use strict";t.r(n),t.d(n,"AddProjectModule",(function(){return m}));var o=t("ofXK"),i=t("3Pt+"),r=t("tyNb"),c=t("Nmwl"),a=t("fXoL"),l=t("y/kg");function b(e,n){if(1&e&&(a.Mb(0,"option",9),a.fc(1),a.Lb()),2&e){var t=n.$implicit;a.ac("value",t._id),a.zb(1),a.ic("",t.name," ( ",t.email," )")}}var s,f,d,u=[{path:"",component:(s=function(){function e(n,t){_classCallCheck(this,e),this._api=n,this.router=t,this.fields=new c.b}return _createClass(e,[{key:"ngOnInit",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;this._api.getAllUser({}).subscribe((function(n){n.error||(e.employeeList=n.employeeList)}))}},{key:"Submit",value:function(){var e=this;this._api.ProjectAdd(this.fields).subscribe((function(n){n.error||e.router.navigate(["/projects"])}))}}]),e}(),s.\u0275fac=function(e){return new(e||s)(a.Jb(l.a),a.Jb(r.a))},s.\u0275cmp=a.Db({type:s,selectors:[["app-add-project"]],decls:24,vars:5,consts:[[1,"mt-2"],[1,"form-group"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],["type","number",1,"form-control",3,"ngModel","ngModelChange"],["rows","5",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-control",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary",3,"click"],["routerLink","/employees",1,"btn","ml-2","btn-secondary"],[3,"value"]],template:function(e,n){1&e&&(a.Mb(0,"h2"),a.fc(1,"Add Project"),a.Lb(),a.Mb(2,"div",0),a.Mb(3,"div",1),a.Mb(4,"label"),a.fc(5,"Project Name"),a.Lb(),a.Mb(6,"input",2),a.Tb("ngModelChange",(function(e){return n.fields.projectName=e})),a.Lb(),a.Lb(),a.Mb(7,"div",1),a.Mb(8,"label"),a.fc(9,"Estimated Time (hr)"),a.Lb(),a.Mb(10,"input",3),a.Tb("ngModelChange",(function(e){return n.fields.estimatedTime=e})),a.Lb(),a.Lb(),a.Mb(11,"div",1),a.Mb(12,"label"),a.fc(13,"Description"),a.Lb(),a.Mb(14,"textarea",4),a.Tb("ngModelChange",(function(e){return n.fields.description=e})),a.Lb(),a.Lb(),a.Mb(15,"div",1),a.Mb(16,"label"),a.fc(17,"Select Employee"),a.Lb(),a.Mb(18,"select",5),a.Tb("ngModelChange",(function(e){return n.fields.employeeIde=e})),a.ec(19,b,2,3,"option",6),a.Lb(),a.Lb(),a.Mb(20,"button",7),a.Tb("click",(function(){return n.Submit()})),a.fc(21,"Submit"),a.Lb(),a.Mb(22,"a",8),a.fc(23,"cancel"),a.Lb(),a.Lb()),2&e&&(a.zb(6),a.ac("ngModel",n.fields.projectName),a.zb(4),a.ac("ngModel",n.fields.estimatedTime),a.zb(4),a.ac("ngModel",n.fields.description),a.zb(4),a.ac("ngModel",n.fields.employeeIde),a.zb(1),a.ac("ngForOf",n.employeeList))},directives:[i.a,i.c,i.d,i.f,i.g,o.i,r.c,i.e,i.h],styles:[""]}),s)}],p=((d=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:d}),d.\u0275inj=a.Gb({factory:function(e){return new(e||d)},imports:[[r.d.forChild(u)],r.d]}),d),m=((f=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:f}),f.\u0275inj=a.Gb({factory:function(e){return new(e||f)},imports:[[o.b,i.b,p]]}),f)}}]);