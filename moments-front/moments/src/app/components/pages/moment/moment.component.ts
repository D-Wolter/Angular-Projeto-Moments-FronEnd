import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { MomentService } from '../../../services/moment.service';

import { MessagesService } from '../../../services/messages.service';

import { Moment } from '../../../Moment';

import { environment } from '../../../../environments/environments';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiUrl: string = environment.baseApiUrl;

  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
    private momentService: MomentService, 
    private messagesService: MessagesService , 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
 
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => (this.moment = item.data))
  }

  async removeHandler(id: number) {
    await this.momentService.removeMoment(id).subscribe()

    this.messagesService.add('Momento excluido com sucesso!')

    this.router.navigate(['/']);
  }
}
