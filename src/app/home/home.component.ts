import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SearchGlAccountComponent } from '../search-gl-account/search-gl-account.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  glAccountCode: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    console.log("HomeComponent: ngOnInit");
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(SearchGlAccountComponent, {
      width: '250px',
      data: { glAccountCode: this.glAccountCode }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.glAccountCode = result;
    });
  }

}
