import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppTheme } from '../../types/layout/app-theme.type';
import { LocalStorageDict } from '../../enums/local.enum';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  theme: BehaviorSubject<AppTheme> = new BehaviorSubject<AppTheme>('dark');

  setTheme(): void {
    const theme: AppTheme =
      (localStorage.getItem(LocalStorageDict.Theme) as AppTheme) ?? 'dark';

    const htmlElem = document.querySelector('html');

    htmlElem?.setAttribute('data-bs-theme', theme);

    this.theme.next(theme);
  }

  themeSwitcher(selectedTheme: AppTheme) {
    localStorage.setItem(LocalStorageDict.Theme, selectedTheme);

    this.setTheme();
  }
}
