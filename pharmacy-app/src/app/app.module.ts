import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

import { CreateNewsComponent } from './create-news/create-news.component';
import { AllObjectionsViewComponent } from './all-objections-view/all-objections-view.component';
import { SaveMedicationConsumptionReportComponent } from './save-medication-consumption-report/save-medication-consumption-report.component';
import { NotificationComponent } from './notification/notification.component';
import { AllActiveTendersViewComponent } from './all-active-tenders-view/all-active-tenders-view.component';
import { AllActiveTendersViewService } from './all-active-tenders-view/all-active-tenders-view.service';
import { CreateOfferComponent } from './create-offer/create-offer.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'createActionsAndNews', component: CreateNewsComponent},
  { path: 'objections', component: AllObjectionsViewComponent},
  { path: 'saveMedicationConsumptionReport', component: SaveMedicationConsumptionReportComponent},
  { path: 'notification', component: NotificationComponent},
  { path: 'allTenders', component: AllActiveTendersViewComponent},
  { path: 'createOffer', component: CreateOfferComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CreateNewsComponent,
    AllObjectionsViewComponent,
    SaveMedicationConsumptionReportComponent,
    NotificationComponent,
    AllActiveTendersViewComponent,
    CreateOfferComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
