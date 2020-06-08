export class Commentaire {
  private _username: string;
  private _message: string;
  private _room: string;

  constructor(username: string, message: string, room: string) {
    this._username = username;
    this._message = message;
    this._room = room;
  }

  get room(): string {
    return this._room;
  }

  set room(value: string) {
    this._room = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}
