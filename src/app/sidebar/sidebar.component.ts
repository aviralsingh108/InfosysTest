import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  loadRoleAndControl() {
    this.buttonClicked.emit();
  }
}
