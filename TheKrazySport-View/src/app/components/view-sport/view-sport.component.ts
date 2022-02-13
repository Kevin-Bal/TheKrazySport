import { Component, OnInit, ViewChild} from '@angular/core';
import { Sport } from '../../models/sport.model';
import { SportService } from '../../services/sport.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-view-sport',
  templateUrl: './view-sport.component.html',
  styleUrls: ['./view-sport.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ViewSportComponent implements OnInit {

  // Spécificité Angular Material pour le tri et la pagination d'un tableau
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  // Nom des colonnes du tableau
  displayedColumns: string[] = ['Personne', 'Distance (km)', 'Durée (hh:mm)','Vitesse (km/h)','Pratique'];
  sports!: Sport[];
  userSport!: User;
  sportsAndUsers: Array<{ sport: Sport, user: string}> = [];
  expandedElement!: Sport | null; // Permet de expand la ligne avec l'image de la sortie 

  // Tableau de données lié au tableau, ici les Calls for Paper, déclaré à un tableau vide
  dataSource = new MatTableDataSource([]);
  
  constructor(private sportService: SportService, private userService: UserService) {
  }

  ngOnInit() {
    this.sportService.allSports().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  userID(sport: Sport): string{
    this.userService.getUserById(sport.userId).subscribe(async (user: any) => {
      this.userSport = await user;
    });
    return this.userSport.firstname;
  }
}


