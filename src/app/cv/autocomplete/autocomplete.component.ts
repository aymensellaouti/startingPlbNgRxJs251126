import { Component, inject } from "@angular/core";
import { FormBuilder, AbstractControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { debounceTime, distinctUntilChanged, switchMap, tap } from "rxjs";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv";

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.css'],
    standalone: false
})
export class AutocompleteComponent {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  get search(): AbstractControl {
    return this.form.get('search')!;
  }
  form = this.formBuilder.group({ search: [''] });
  cvs: Cv[] = [];
  cvs$ = this.search.valueChanges.pipe(
    // N'envoi la valeur que si tu reste stable pêndant 500ms
    debounceTime(500),
    // N'envoi pas la valeur si elle change pas
    distinctUntilChanged(),
    // pour chaque nouvel appel désinscrit toi du précédent
    switchMap(chaineDeRecherche => this.cvService.selectByName(chaineDeRecherche))
  );
  constructor() {
    // le flux du contenu de
    // this.search.valueChanges
    //   .pipe
    //   // a au aur auré
    //   ()
    //   .subscribe({
    //     next: (chaine) => console.log(chaine),
    //   });
  }
}
