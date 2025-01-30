import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public userSignal = signal<string>('');

  getUserId(): string {
    let user = localStorage.getItem('userId');
    if (!user) {
      user = this.generateUserId();
      this.userSignal.set(user);
      this.saveUserId(user);
      return user;
    }
    return user;
  }
  saveUserId(userId: string): void {
    localStorage.setItem('userId', userId);
  }

  generateUserId(): string {
    let ID = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (var i = 0; i < 12; i++) {
      ID += characters.charAt(Math.floor(Math.random() * 36));
    }
    return ID;
  }
}
