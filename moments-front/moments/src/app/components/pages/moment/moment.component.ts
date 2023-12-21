import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormGroupDirective, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';
import { CommentService } from '../../../services/comment.service';

import { Moment } from '../../../Moment';
import { Coment } from '../../../Coment';

import { environment } from '../../../../environments/environments';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule, HttpClientModule, ReactiveFormsModule ],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css',
  providers: [CommentService]
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiUrl: string = environment.baseApiUrl;

  faTimes = faTimes;
  faEdit = faEdit;

  commentForm!: FormGroup;

  constructor(
    private momentService: MomentService, 
    private messagesService: MessagesService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
 
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => (this.moment = item.data))

    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(3)]),
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })
  }

  get text() { return this.commentForm.get('text')!; }

  get username() { return this.commentForm.get('username')!; }

  async removeHandler(id: number) {
    await this.momentService.removeMoment(id).subscribe()

    this.messagesService.add('Momento excluido com sucesso!')

    this.router.navigate(['/']);
  }

  onSubmit(formDirective: FormGroupDirective) {

  }
}


