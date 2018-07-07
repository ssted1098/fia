import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GlAccountSearchfilter } from '../search-filters/gl-account-searchfilter'

@Component({
  selector: 'app-search-gl-account',
  templateUrl: './search-gl-account.component.html',
  styleUrls: ['./search-gl-account.component.css']
})
export class SearchGlAccountComponent {

  constructor(public dialogRef: MatDialogRef<SearchGlAccountComponent>,
        @Inject(MAT_DIALOG_DATA) public data: GlAccountSearchfilter) {
        }

  onNoClick(): void {
    console.log("onNoClick");
    this.dialogRef.close();
  }
}
