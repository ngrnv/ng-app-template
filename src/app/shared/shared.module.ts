import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatRadioModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MODULES = [
  CommonModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatButtonModule,
  MatRadioModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [
    ...MODULES,
  ],
  exports: [
    ...MODULES,
  ],
})
export class SharedModule {}
