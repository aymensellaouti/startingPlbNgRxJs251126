import { Component, ChangeDetectionStrategy, signal } from "@angular/core";
import { Cv } from "../model/cv";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { ListComponent } from "../list/list.component";
import { CvCardComponent } from "../cv-card/cv-card.component";
import { EmbaucheComponent } from "../embauche/embauche.component";
import { UpperCasePipe, DatePipe, AsyncPipe } from "@angular/common";
import { catchError, Observable, of, retry, tap } from "rxjs";
import { TestRxJs } from "src/app/rxjs/test-rx-js/test-rx-js";
import { toSignal } from "@angular/core/rxjs-interop";
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  imports: [
    ListComponent,
    CvCardComponent,
    EmbaucheComponent,
    UpperCasePipe,
    DatePipe,
    AsyncPipe,
    TestRxJs
],
})
export class CvComponent {

  selectedCv$ = this.cvService.selectedCv$;
  date = new Date();
  isLoading = signal(true);
  // Todo : Transformer l'inscription en un flux et gérer l'erreur avec l'opérateur catchError
  cvs$: Observable<Cv[]> = this.cvService.getCvs().pipe(
    retry({
      count: 3,
      delay:1000
    }),
    tap(() => this.isLoading.set(false)),
    catchError(e => {
      this.toastr.error(`
        Attention!! Les données sont fictives, problème avec le serveur.
        Veuillez contacter l'admin.`);
        return of(this.cvService.getFakeCvs());
      })
    );
  cvs = toSignal(this.cvs$,{initialValue: []});
  constructor(
    private toastr: ToastrService,
    private cvService: CvService,
  ) {
    // this.cvService.getCvs().subscribe({
    //   next: (cvs) => {
    //     this.cvs.set(cvs);
    //   },
    //   error: () => {
    //     this.cvs.set(this.cvService.getFakeCvs());
    //     this.toastr.error(`
    //       Attention!! Les données sont fictives, problème avec le serveur.
    //       Veuillez contacter l'admin.`);
    //   },
    // });
  }

}
