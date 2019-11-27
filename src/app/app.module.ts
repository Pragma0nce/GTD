import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatMenuModule, MatCheckboxModule } from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FirebaseTestComponent } from './firebase-test/firebase-test.component';
import { HomeComponent } from './home/home.component';
import { DashboardInComponent } from './dashboard-in/dashboard-in.component';
import { DashboardNextActionsComponent } from './dashboard-next-actions/dashboard-next-actions.component';
import { DashboardCalenderComponent } from './dashboard-calender/dashboard-calender.component';
import { DashboardProjectsComponent } from './dashboard-projects/dashboard-projects.component';
import { DashboardWaitingComponent } from './dashboard-waiting/dashboard-waiting.component';
import { EditListComponent } from './edit-list/edit-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    FirebaseTestComponent,
    HomeComponent,
    DashboardInComponent,
    DashboardNextActionsComponent,
    DashboardCalenderComponent,
    DashboardProjectsComponent,
    DashboardWaitingComponent,
    EditListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
