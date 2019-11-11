import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private firstNameSource = new BehaviorSubject<string>(null);
  private lastNameSource = new BehaviorSubject<string>(null);
  private emailSource = new BehaviorSubject<string>(null);
  private birthDateSource = new BehaviorSubject<Date>(null);
  private bioSource = new BehaviorSubject<string>(null);
  private profilePictureURLSource = new BehaviorSubject<string>(null);

  firstName$ = this.firstNameSource.asObservable();
  lastName$ = this.lastNameSource.asObservable();
  email$ = this.emailSource.asObservable();
  birthDate$ = this.birthDateSource.asObservable();
  bio$ = this.bioSource.asObservable();
  profilePictureURL$ = this.profilePictureURLSource.asObservable();

  constructor() { }

  setFirstName(val: string) {
    this.firstNameSource.next(val);
  }

  setLastName(val: string) {
    this.lastNameSource.next(val);
  }

  setEmail(val: string) {
    this.emailSource.next(val);
  }

  setBirthDate(val: Date) {
    this.birthDateSource.next(val);
  }

  setBio(val: string) {
    this.bioSource.next(val);
  }

  setProfilePictureURL(val: string) {
    this.profilePictureURLSource.next(val);
  }
}
