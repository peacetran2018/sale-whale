import { Component, OnInit } from '@angular/core';
import { Team } from '../../shared/models/team.model';
import { TeamService } from '../../shared/services/team/team.service';

import { Activity } from '../../shared/models/activity.model';
import { ActivityService } from '../../shared/services/activity/activity.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  activities: Activity[] = [];
  all: Team[] = [];
  favorites: Team[] = [];
  archived: Team[] = [];
  constructor(private teamService: TeamService, private activityService: ActivityService) { }

  ngOnInit() {
   this.loadTeam("all");
   this.loadActivity();
  }

  loadTeam(type: string) {
    switch (type) {
      case "all":
          this.teamService.getTeams().subscribe(data => {
            this.all = data.teams;
          })
        break;
      case "favorite":
          this.favorites = [];
          this.teamService.getTeams().subscribe(data => {
            data.teams.forEach(item =>{
              if(item.is_favorited === true){
                this.favorites.push(item);
              }
            })
          })
        break;
      case "archived":
          this.archived = []
          this.teamService.getTeams().subscribe(data => {
            data.teams.forEach(item =>{
              if(item.is_archived === true){
                this.archived.push(item);
                console.log(this.archived);
              }
            })
          })
        break;
      default:
        break;
    }
  }

  loadActivity(){
    this.activityService.getActivity().subscribe(data =>{
      this.activities = data.activities;
    })
  }
}
