import { Component, OnInit } from '@angular/core';

import { Moment } from '../../../Moment';

import { MomentService } from '../../../services/moment.service';

import { environment } from '../../../../environments/environments';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl: string = environment.baseApiUrl;
  
  constructor() { }

  ngOnInit(): void {}
}
