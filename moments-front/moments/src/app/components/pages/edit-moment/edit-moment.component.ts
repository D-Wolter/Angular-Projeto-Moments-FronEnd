import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { Moment } from '../../../Moment';

import { MomentService } from '../../../services/moment.service';

@Component({
  selector: 'app-edit-moment',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './edit-moment.component.html',
  styleUrl: './edit-moment.component.css'
})
export class EditMomentComponent implements OnInit{
  moment!: Moment;
  btnText: string = 'editar';

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => this.moment = item.data)
  }
}
