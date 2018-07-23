import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatButtonModule,
  MatCheckboxModule, MatDialogModule,
  MatAutocompleteModule, MatButtonToggleModule, MatCardModule,
  MatChipsModule, MatDatepickerModule, MatDividerModule,
  MatExpansionModule, MatGridListModule, MatIconModule,
  MatListModule, MatMenuModule, MatNativeDateModule,
  MatProgressBarModule, MatRadioModule, MatRippleModule,
  MatSelectModule, MatOptionModule, MatSidenavModule, MatSliderModule,
  MatSlideToggleModule, MatSnackBarModule, MatStepperModule,
   MatTabsModule, MatToolbarModule, MatTooltipModule, ErrorStateMatcher,
   ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeRateService } from './exchange-rate.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatMomentDateModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule
  ],
  exports: [
    MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
    MatSortModule, MatTableModule, MatButtonModule,
    MatCheckboxModule, MatDialogModule, ReactiveFormsModule,
    MatAutocompleteModule, MatButtonToggleModule, MatCardModule,
    MatChipsModule, MatDatepickerModule, MatMomentDateModule,
    MatDividerModule,
    MatExpansionModule, MatGridListModule, MatIconModule,
    MatListModule, MatMenuModule, MatNativeDateModule,
    MatProgressBarModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatOptionModule, MatSidenavModule, MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule, MatStepperModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule
  ],
  providers: [ ExchangeRateService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
