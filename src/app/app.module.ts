import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { IntervalTimerComponent } from './observable/interval-timer/interval-timer.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    ObservableComponent,
    FromEventComponent,
    ListComponent,
    IntervalTimerComponent,
    OfFromComponent,
    ToArrayComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
