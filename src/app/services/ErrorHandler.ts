import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
class ErrorHandler {

  nesto:any

  constructor(@Inject(Router) public  router: Router) {
    this.nesto = router;
    // this.router.navigate(['/login']);
  }

  public onError(error: any) {
    console.log(this.router, this.nesto)
    this.router.navigate(['/login']);

    return Observable.empty();
  }

}

export {ErrorHandler}
