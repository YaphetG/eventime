import { Component, OnInit } from '@angular/core';
import { Comment } from "../../models/Comment.model";
import { CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],


})
export class CommentComponent implements OnInit {

  comment: Comment;

  ngOnInit() {
  } 

  constructor(private commentService: CommentService) {
    this.comment= {
      description:""
    }
  }

  sendComment(){
    console.log(this.comment.description);
    this.commentService.sendCommentObject(this.comment);
  }

}
