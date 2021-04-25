import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreatEventComponent, 
         EventListResolver, 
         EventRouteActivator, 
         EventDetailsComponent,
         EventService, 
         EventsListComponent, 
         EventThumbnailComponent,
         CreateSessionComponent
 } from './events/index'
import { AuthService } from './user/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreatEventComponent,
    Error404Component,
    CreateSessionComponent
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    { provide:'canDeactivateCreateEvent', 
      useValue: CheckDirtyState}
    ],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function CheckDirtyState(component:CreatEventComponent) {
  if(component.isDirty)
    return window.confirm('You have not saved this event yet, do you really want to cancel ?')
  return true
}
