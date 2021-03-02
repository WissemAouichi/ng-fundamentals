import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreatEventComponent } from './events/shared/create-event.component'
import { Error404Component } from './errors/404.component'

export const appRoutes:Routes = [
{path:'events/new', component:CreatEventComponent},
{path:'events', component: EventsListComponent},
{path:'events/:id', component:EventDetailsComponent},
{path: '404', component:Error404Component},
{path:'', redirectTo:'/events', pathMatch:'full'}
]