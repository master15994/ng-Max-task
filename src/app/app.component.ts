import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { debounceTime, distinctUntilChanged, tap } from 'rxjs';

interface IStudent {
  name: string | null;
  course: number | null;
  isGratuated: boolean;
}
// interface IForm {
//   name: string | null;
//   last_name: string | null;
//   isMan: boolean;
// }
@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.subscribeOnForm();
  }

  formTyped = this.fb.group<IStudent>({
    name: null,
    course: null,
    isGratuated: true,
  });

  subscribeOnForm() {
    this.formTyped.valueChanges.pipe(debounceTime(400));
    distinctUntilChanged((a, b) => isEqual(a, b)),
      tap((res) => console.log(res)),
      UntilDestroy().subscribe();
  }
}
function isEqual(a: unknown, b: unknown): boolean {
  throw new Error('Function not implemented.');
}
function UntilDestroy(): (
  target: typeof AppComponent
) => void | typeof AppComponent {
  throw new Error('Function not implemented.');

  // constructor(private fb: FormBuilder) {}
  // formTyped = this.fb.group<IForm>({
  //   isMan: false,
  //   last_name: null,
  //   name: null,
  // });

  //   subscribeOnForm() {
  //     this.formTyped.valueChanges
  //       .pipe(
  //         debounceTime(400),
  //         distinctUntilChanged((a, b) => isEqual(a, b)),
  //         tap((res) => console.log(res))
  //       )
  //       .subscribe();
  //   }
  // }
  // function UntilDestroy(): (
  //   target: typeof AppComponent
  // ) => void | typeof AppComponent {
  //   throw new Error('Function not implemented.');
  // }

  // function isEqual(
  //   a: Partial<{
  //     name: string | null;
  //     last_name: string | null;
  //     isMan: boolean | null;
  //   }>,
  //   b: Partial<{
  //     name: string | null;
  //     last_name: string | null;
  //     isMan: boolean | null;
  //   }>
  // ): boolean {
  //   throw new Error('Function not implemented.');
}
