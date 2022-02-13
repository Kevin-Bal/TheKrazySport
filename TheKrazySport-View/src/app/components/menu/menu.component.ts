import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navLinks = [
    { path: '', label: 'Home' },
    { path: 'adduser', label: 'Add User' },
    { path: 'profil', label: 'Profil' },
    { path: 'addsport', label: 'Add Sport' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
