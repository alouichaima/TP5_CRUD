import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { ViewComponent } from './post/view/view.component';
import { IndexComponent } from './post/index/index.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from
'@angular/platform-browser/animations';
const routes: Routes = [

{ path: 'post', redirectTo: 'post/index',
pathMatch: 'full'},
{ path: 'post/index', component: IndexComponent },
{ path: 'post/:postId/view', component:
ViewComponent },
{ path: 'post/create', component: CreateComponent
},
{ path: 'post/:postId/edit', component:
EditComponent }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [provideRouter(routes),
    provideAnimations(), provideHttpClient()],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
