import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teams = [];
  constructor(private _teamService: TeamService) { }

  ngOnInit() {
    this.teams = this._teamService.getTeams();
  }

}
