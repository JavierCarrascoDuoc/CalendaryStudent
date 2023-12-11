import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'access',
    loadChildren: () => import('./access/access.module').then( m => m.AccessPageModule)
  },
  
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'usuario-add',
    loadChildren: () => import('./usuario/usuario-add/usuario-add.module').then( m => m.UsuarioAddPageModule)
  },
  {
    path: 'usuario-all',
    loadChildren: () => import('./usuario/usuario-all/usuario-all.module').then( m => m.UsuarioAllPageModule)
  },
  {
    path: 'usuario-detail/:id',
    loadChildren: () => import('./usuario/usuario-detail/usuario-detail.module').then( m => m.UsuarioDetailPageModule)
  },

  {
    path: 'usuario-detail',
    loadChildren: () => import('./usuario/usuario-detail/usuario-detail.module').then( m => m.UsuarioDetailPageModule)
  },

  {
    path: 'usuario-edit/:id',
    loadChildren: () => import('./usuario/usuario-edit/usuario-edit.module').then( m => m.UsuarioEditPageModule)
  },

  {
    path: 'usuario-edit',
    loadChildren: () => import('./usuario/usuario-edit/usuario-edit.module').then( m => m.UsuarioEditPageModule)
  },

  {
    path: 'usuario-list',
    loadChildren: () => import('./usuario/usuario-list/usuario-list.module').then( m => m.UsuarioListPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    path: 'localizacion',
    loadChildren: () => import('./localizacion/localizacion.module').then( m => m.LocalizacionPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },

  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },  {
    path: 'others',
    loadChildren: () => import('./others/others.module').then( m => m.OthersPageModule)
  }


];

@NgModule({
  imports: [  
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
