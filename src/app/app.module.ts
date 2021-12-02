import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { NewPostModule } from './components/posts/new-post/new-post.module';
import { environment } from 'src/environments/environment';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { MdbootstrapModule } from "./mdbootstrap/mdbootstrap.module";
import { HairdresserModule } from "./hairdresser/hairdresser.module";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CreateAppointmentModule } from "./create-appointment/create-appointment.module";
import { UserModule } from "./user/user.module";
import { httpInterceptorProviders } from "./interceptor/providers";
import { CalendarModule } from "./calendar/calendar.module";
import { LandingModule } from "./landing/landing.module";
import { DetailsPostComponent } from "./components/posts/details-post/details-post.component";
import { MaterialModule } from "./material/material.module";

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ReactiveFormsModule } from '@angular/forms';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { EditPostModule } from './components/posts/edit-post/edit-post.module';

@NgModule({
  declarations: [AppComponent, MainNavComponent, PageNotFoundComponent,
    NewPostComponent,
    ToolbarComponent,
    ContainerAppComponent,
    ModalComponent,
    EditPostComponent,
    DetailsPostComponent],
  imports: [
    BrowserModule,
    MdbootstrapModule,
    LandingModule,
    HairdresserModule,
    BrowserAnimationsModule,
    CreateAppointmentModule,
    UserModule,
    CalendarModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NewPostModule,
    ReactiveFormsModule,
    EditPostModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
