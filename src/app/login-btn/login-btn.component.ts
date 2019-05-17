import {Component, OnInit} from '@angular/core';
import {LoginAction, LoginSuccessAction} from '../app.actions';
import {Store} from '@ngrx/store';
import {ProgressState} from '../progress/store/progress.state';

@Component({
  selector: 'app-login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.scss']
})
export class LoginBtnComponent implements OnInit {
  private submitting: boolean;

  constructor(private store: Store<ProgressState>) {
  }

  ngOnInit() {
  }

  onClick() {
    this.store.dispatch(new LoginAction());
    setTimeout(() => this.store.dispatch(new LoginSuccessAction()), 5000);
  }

  onProgressShow() {
    alert(1);
    this.submitting = true;
  }

  onProgressHide() {
    this.submitting = false;
  }
}
