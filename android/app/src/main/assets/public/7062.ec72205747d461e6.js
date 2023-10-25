"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7062],{7062:(M,p,s)=>{s.r(p),s.d(p,{UsuarioEditPageModule:()=>U});var c=s(6814),u=s(95),n=s(7027),g=s(3912),m=s(5861),e=s(6689),f=s(590);const h=[{path:"",component:(()=>{var i;class l{constructor(t,o,a,r,Z,v){this.restApi=t,this.loadingController=o,this.alertController=a,this.route=r,this.router=Z,this.formBuilder=v,this.usuario={id:"",first_name:"",last_name:"",email:"",clave:0},this.id=""}ngOnInit(){console.log("ngOnInit ID:"+this.route.snapshot.params.id),this.getUsuario(this.route.snapshot.params.id),this.usuarioForm=this.formBuilder.group({usuario_first_name:[null,u.kI.required],usuario_last_name:[null,u.kI.required],usuario_email:[null,u.kI.required],usuario_clave:[null,u.kI.required]})}onFormSubmit(t){var o=this;return(0,m.Z)(function*(){console.log("onFormSubmit ID:"+o.id),o.usuario.id=o.id,yield o.restApi.updateUsuario(o.id,o.usuario).subscribe({next:a=>{o.router.navigate(["/usuario-detail/"+o.id])},complete:()=>{},error:a=>{console.log(a)}})})()}getUsuario(t){var o=this;return(0,m.Z)(function*(){const a=yield o.loadingController.create({message:"Loading..."});yield a.present(),yield o.restApi.getUsuario(t+"").subscribe({next:r=>{console.log("getUsuarioID data****"),console.log(r),o.id=r.id,o.usuarioForm.setValue({usuario_first_name:r.first_name,usuario_last_name:r.last_name,usuario_email:r.email,usuario_clave:r.clave}),a.dismiss()},complete:()=>{},error:r=>{console.log("getUsuarioID Errr****+"),console.log(r),a.dismiss()}})})()}presentAlertConfirm(t){var o=this;return(0,m.Z)(function*(){yield(yield o.alertController.create({header:"Warning!",message:t,buttons:[{text:"Okay",handler:()=>{o.router.navigate(["/usuario-list/"])}}]})).present()})()}}return(i=l).\u0275fac=function(t){return new(t||i)(e.Y36(f.P),e.Y36(n.HT),e.Y36(n.Br),e.Y36(g.gz),e.Y36(g.F0),e.Y36(u.qu))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-usuario-edit"]],decls:28,vars:7,consts:[[3,"translucent"],["slot","start"],["slot","end"],["defaultHref","/"],["padding",""],[3,"formGroup","ngSubmit"],["position","floating"],["type","text","formControlName","usuario_first_name",3,"ngModel","ngModelChange"],["type","text","formControlName","usuario_last_name",3,"ngModel","ngModelChange"],["type","text","formControlName","usuario_email",3,"ngModel","ngModelChange"],["type","number","formControlName","usuario_clave",3,"ngModel","ngModelChange"],["type","submit","shape","round","color","primary","expand","block",3,"disabled"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"usuario-edit"),e.qZA(),e.TgZ(6,"ion-buttons",2),e._UZ(7,"ion-back-button",3),e.qZA()()(),e.TgZ(8,"ion-content",4)(9,"form",5),e.NdJ("ngSubmit",function(){return o.onFormSubmit(o.usuarioForm.value)}),e.TgZ(10,"ion-item")(11,"ion-label",6),e._uU(12,"Nombre del usuario"),e.qZA(),e.TgZ(13,"ion-input",7),e.NdJ("ngModelChange",function(r){return o.usuario.first_name=r}),e.qZA()(),e.TgZ(14,"ion-item")(15,"ion-label",6),e._uU(16,"Apellido del usuario"),e.qZA(),e.TgZ(17,"ion-input",8),e.NdJ("ngModelChange",function(r){return o.usuario.last_name=r}),e.qZA()(),e.TgZ(18,"ion-item")(19,"ion-label",6),e._uU(20,"Email usuario"),e.qZA(),e.TgZ(21,"ion-input",9),e.NdJ("ngModelChange",function(r){return o.usuario.email=r}),e.qZA()(),e.TgZ(22,"ion-item")(23,"ion-label",6),e._uU(24,"clave usuario"),e.qZA(),e.TgZ(25,"ion-input",10),e.NdJ("ngModelChange",function(r){return o.usuario.clave=r}),e.qZA()(),e.TgZ(26,"ion-button",11),e._uU(27,"Agregar"),e.qZA()()()),2&t&&(e.Q6J("translucent",!0),e.xp6(9),e.Q6J("formGroup",o.usuarioForm),e.xp6(4),e.Q6J("ngModel",o.usuario.first_name),e.xp6(4),e.Q6J("ngModel",o.usuario.last_name),e.xp6(4),e.Q6J("ngModel",o.usuario.email),e.xp6(4),e.Q6J("ngModel",o.usuario.clave),e.xp6(1),e.Q6J("disabled",!o.usuarioForm.valid))},dependencies:[u._Y,u.JJ,u.JL,n.oU,n.YG,n.Sm,n.W2,n.Gu,n.pK,n.Ie,n.Q$,n.fG,n.wd,n.sr,n.as,n.j9,n.cs,u.sg,u.u]}),l})()}];let _=(()=>{var i;class l{}return(i=l).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.Bz.forChild(h),g.Bz]}),l})(),U=(()=>{var i;class l{}return(i=l).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.ez,u.u5,n.Pc,u.UX,_]}),l})()}}]);