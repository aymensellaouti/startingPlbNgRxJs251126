import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Cv } from "../model/cv";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { ListComponent } from "../list/list.component";
import { CvCardComponent } from "../cv-card/cv-card.component";
import { EmbaucheComponent } from "../embauche/embauche.component";
import { UpperCasePipe, DatePipe, AsyncPipe } from "@angular/common";
import { catchError, Observable, of, retry } from "rxjs";
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    ListComponent,
    CvCardComponent,
    EmbaucheComponent,
    UpperCasePipe,
    DatePipe,
    AsyncPipe
  ],
})
export class CvComponent {
  cvs: Cv[] = [];

  selectedCv$ = this.cvService.selectedCv$;
  date = new Date();
  // Todo : Transformer l'inscription en un flux et gérer l'erreur avec l'opérateur catchError
  cvs$: Observable<Cv[]> = this.cvService.getCvs().pipe(
    retry({
      count: 3,
      delay:1000
    }),
    catchError(e => {
      this.toastr.error(`
        Attention!! Les données sont fictives, problème avec le serveur.
        Veuillez contacter l'admin.`);
        return of(this.cvService.getFakeCvs());
      })
  );
  constructor(
    private toastr: ToastrService,
    private cvService: CvService,
  ) {
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: () => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
      },
    });
  }

}
