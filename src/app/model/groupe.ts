import {User} from "./user";

export class Groupe {
  private _id: string;
  private _nomGroup: string;
  private _description: string;
  private _datecreation: Date;
  private _UserId: string;
  private _membre: User[];

  constructor(id: string, nomGroup: string, description: string, datecreation: Date, UserId: string, membre: User[]) {
    this._id = id;
    this._nomGroup = nomGroup;
    this._description = description;
    this._datecreation = datecreation;
    this._UserId = UserId;
    this._membre = membre;
  }

  get membre(): User[] {
    return this._membre;
  }

  set membre(value: User[]) {
    this._membre = value;
  }

  get nomGroup(): string {
    return this._nomGroup;
  }
  set nomGroup(value: string) {
    this._nomGroup = value;
  }
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
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
}
