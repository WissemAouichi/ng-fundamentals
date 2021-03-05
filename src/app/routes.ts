import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { EventListResolver } from './events/events-list-resolver.service'
import { CreatEventComponent } from './events/create-event.component'

export const appRoutes:Routes = [
{path:'events/new', component:CreatEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
{path:'events', component: EventsListComponent, resolve: {events:EventListResolver} },
{path:'events/:id', component:EventDetailsComponent, canActivate:[EventRouteActivator]},
{path: '404', component:Error404Component},
{path:'', redirectTo:'/events', pathMatch:'full'},
{path:'user', loadChildren:'./user/user.module#UserModule'}
]