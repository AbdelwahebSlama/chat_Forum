export class MessageFils {
  private _title: string;
  private _content: string;
  private _likes: number;
  private _datecreation: Date;
  private _UserId: string ;
  private _messageId: string;
  private _username: string;

  constructor(title: string, content: string, likes: number, datecreation: Date, UserId: string, messageId: string, username: string) {
    this._title = title;
    this._content = content;
    this._likes = likes;
    this._datecreation = datecreation;
    this._UserId = UserId;
    this._messageId = messageId;
    this._username = username;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get likes(): number {
    return this._likes;
  }

  set likes(value: number) {
    this._likes = value;
  }

  get datecreation(): Date {
    return this._datecreation;
  }

  set datecreation(value: Date) {
    this._datecreation = value;
  }

  get UserId(): string {
    return this._UserId;
  }

  set UserId(value: string) {
    this._UserId = value;
  }

  get messageId(): string {
    return this._messageId;
  }

  set messageId(value: string) {
    this._messageId = value;
  }
}
