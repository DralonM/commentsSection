import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(public commentsService: CommentsService) {}

  ngOnInit() {
    this.commentsService.getData()
    .subscribe(data => {
      console.log(data)
    });
  }

}
