import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { userRoutes } from "./user.routes"
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [

    ]
})
export class UserModule {}