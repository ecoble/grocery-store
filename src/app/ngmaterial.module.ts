import { NgModule } from '@angular/core';
import {  MatButtonModule, 
          MatMenuModule,
          MatIconModule,
          MatCardModule,
          MatToolbarModule,
          MatInputModule,
          MatSnackBarModule
          } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSnackBarModule,
    ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSnackBarModule
    ] 
})
export class MaterialAppModule { }