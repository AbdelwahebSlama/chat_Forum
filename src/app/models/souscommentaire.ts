import {Commentaire} from './commentaire';

export class Souscommentaire {
  private _sousComment: string;
  private _comment: Commentaire;


  constructor(sousComment: string, comment: Commentaire) {
    this._sousComment = sousComment;
    this._comment = comment;
  }


  get sousComment(): string {
    return this._sousComment;
  }

  set sousComment(value: string) {
    this._sousComment = value;
  }

  get comment(): Commentaire {
    return this._comment;
  }

  set comment(value: Commentaire) {
    this._comment = value;
  }
}
