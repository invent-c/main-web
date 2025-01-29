import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path : '',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
      path:'',
      component : LayoutComponent,
      children:[
        {
          path:'home',
          loadChildren: () => import('../home/home.module').then((m)=>m.HomeModule)
        },
        {
          path:'about',
          loadComponent: () => import('../components/about/about.component').then((c)=>c.AboutComponent)
        },
        {
          path:'contact',
          loadComponent: () => import('../components/contact/contact.component').then((c)=>c.ContactComponent)
        },
        {
          path:'services-offered',
          loadComponent: () => import('../components/services-offered/services-offered.component').then((c)=>c.ServicesOfferedComponent)
        },
        {
          path:'work',
          loadComponent: () => import('../components/work/work.component').then((c)=>c.WorkComponent)
        },
        {
          path:'news',
          loadComponent: () => import('../components/news/news.component').then((c)=>c.NewsComponent)
        },
        {
          path:'tool',
          loadComponent: () => import('../components/tool/tool.component').then((c)=>c.ToolComponent)
        },
        {
          path:'activities',
          loadComponent: () => import('../components/activities/activities.component').then((c)=>c.ActivitiesComponent)
        },
      ]
    },
    {
      path:'**',
      loadComponent: () => import('../components/page-not-found/page-not-found.component').then((m)=>m.PageNotFoundComponent)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
