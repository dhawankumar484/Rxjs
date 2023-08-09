import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';

const routes: Routes = [
  {path:"observable", component:ObservableComponent, children:[
    {path:"", component:ListComponent},
    {path:"fromEvent", component:FromEventComponent}
  ]},
  {path:"**", redirectTo:"observable"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
