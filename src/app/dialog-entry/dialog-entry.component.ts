import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

import { GnomeDetailComponent } from '../gnome-detail/gnome-detail.component';

@Component({
  selector: 'app-dialog-entry',
  templateUrl: './dialog-entry.component.html',
  styleUrls: ['./dialog-entry.component.scss']
})
export class DialogEntryComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GnomeDetailComponent, {
      width: '90%',
      data: {id: +this.route.snapshot.paramMap.get('id')}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['../../'], {relativeTo: this.route});
    });
  }

}
