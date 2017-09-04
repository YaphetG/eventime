import { Injectable } from '@angular/core';
import { Comment } from '../models/Comment.model';
@Injectable()
export class CommentService {

  constructor() { }

  sendCommentObject(comment: Comment){
    console.log("service callled");
    
  }

}
