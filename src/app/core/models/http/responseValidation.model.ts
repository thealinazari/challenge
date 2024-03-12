import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

export default class ResValidation {
  public static ValidateErr(res: HttpErrorResponse, router: Router) {
    if (res.status === 401) {
      router.navigate(['auth/login']);
    }

    if (res.status === 500) {
      router.navigate(['error/500']);
    }

    if (res.status === 429) {
      router.navigate(['error/429']);
    }
  }
}
