import { Component, OnInit } from '@angular/core';

import { Moment } from '../../../Moment';

import { MomentService } from '../../../services/moment.service';

import { environment } from '../../../../environments/environments';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl: string = environment.baseApiUrl;
  
  faSearch = faSearch;
  searchTerm: string = '';

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-Br')
      })

      this.allMoments = data;
      this.moments = data;
    })
  }

  search(event: any): void {

  }
}
