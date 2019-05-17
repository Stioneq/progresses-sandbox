import {Component, OnInit} from '@angular/core';
import {ProgressState} from './progress/store/progress.state';
import {Store} from '@ngrx/store';
import {LoginAction, LoginSuccessAction} from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<ProgressState>) {

  }

  ngOnInit(): void {
  }


  onClick() {
    this.store.dispatch(new LoginAction());
    setTimeout(() => this.store.dispatch(new LoginSuccessAction()), 5000);
  }
}
