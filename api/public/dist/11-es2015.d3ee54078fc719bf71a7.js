(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{yVo5:function(e,t,n){"use strict";n.r(t),n.d(t,"AddProjectModule",(function(){return f}));var o=n("ofXK"),i=n("3Pt+"),r=n("tyNb"),b=n("Nmwl"),c=n("fXoL"),l=n("y/kg");function s(e,t){if(1&e&&(c.Mb(0,"option",9),c.fc(1),c.Lb()),2&e){const e=t.$implicit;c.ac("value",e._id),c.zb(1),c.ic("",e.name," ( ",e.email," )")}}const a=[{path:"",component:(()=>{class e{constructor(e,t){this._api=e,this.router=t,this.fields=new b.b}ngOnInit(){this.getData()}getData(){this._api.getAllUser({}).subscribe(e=>{e.error||(this.employeeList=e.employeeList)})}Submit(){this._api.ProjectAdd(this.fields).subscribe(e=>{e.error||this.router.navigate(["/projects"])})}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(l.a),c.Jb(r.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-add-project"]],decls:24,vars:5,consts:[[1,"mt-2"],[1,"form-group"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],["type","number",1,"form-control",3,"ngModel","ngModelChange"],["rows","5",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-control",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary",3,"click"],["routerLink","/employees",1,"btn","ml-2","btn-secondary"],[3,"value"]],template:function(e,t){1&e&&(c.Mb(0,"h2"),c.fc(1,"Add Project"),c.Lb(),c.Mb(2,"div",0),c.Mb(3,"div",1),c.Mb(4,"label"),c.fc(5,"Project Name"),c.Lb(),c.Mb(6,"input",2),c.Tb("ngModelChange",(function(e){return t.fields.projectName=e})),c.Lb(),c.Lb(),c.Mb(7,"div",1),c.Mb(8,"label"),c.fc(9,"Estimated Time (hr)"),c.Lb(),c.Mb(10,"input",3),c.Tb("ngModelChange",(function(e){return t.fields.estimatedTime=e})),c.Lb(),c.Lb(),c.Mb(11,"div",1),c.Mb(12,"label"),c.fc(13,"Description"),c.Lb(),c.Mb(14,"textarea",4),c.Tb("ngModelChange",(function(e){return t.fields.description=e})),c.Lb(),c.Lb(),c.Mb(15,"div",1),c.Mb(16,"label"),c.fc(17,"Select Employee"),c.Lb(),c.Mb(18,"select",5),c.Tb("ngModelChange",(function(e){return t.fields.employeeIde=e})),c.ec(19,s,2,3,"option",6),c.Lb(),c.Lb(),c.Mb(20,"button",7),c.Tb("click",(function(){return t.Submit()})),c.fc(21,"Submit"),c.Lb(),c.Mb(22,"a",8),c.fc(23,"cancel"),c.Lb(),c.Lb()),2&e&&(c.zb(6),c.ac("ngModel",t.fields.projectName),c.zb(4),c.ac("ngModel",t.fields.estimatedTime),c.zb(4),c.ac("ngModel",t.fields.description),c.zb(4),c.ac("ngModel",t.fields.employeeIde),c.zb(1),c.ac("ngForOf",t.employeeList))},directives:[i.a,i.c,i.d,i.f,i.g,o.i,r.c,i.e,i.h],styles:[""]}),e})()}];let d=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[r.d.forChild(a)],r.d]}),e})(),f=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[o.b,i.b,d]]}),e})()}}]);