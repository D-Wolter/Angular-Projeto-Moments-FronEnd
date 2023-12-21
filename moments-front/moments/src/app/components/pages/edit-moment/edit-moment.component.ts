import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { Moment } from '../../../Moment';

import { MomentService } from '../../../services/moment.service';
import { MomentFormComponent } from "../../moment-form/moment-form.component";

@Component({
    selector: 'app-edit-moment',
    standalone: true,
    templateUrl: './edit-moment.component.html',
    styleUrl: './edit-moment.component.css',
    imports: [RouterModule, MomentFormComponent]
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
