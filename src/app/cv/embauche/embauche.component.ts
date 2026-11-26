import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { EmbaucheService } from '../services/embauche.service';
import { Cv } from '../model/cv';
import { ItemComponent } from '../item/item.component';
import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-embauche',
    templateUrl: './embauche.component.html',
    styleUrls: ['./embauche.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [ItemComponent]
})
export class EmbaucheComponent {
  public embauchees: Cv[] = [];
  cvService = inject(CvService);
  toastr = inject(ToastrService)
  constructor(private embaucheService: EmbaucheService) {
    this.embauchees = this.embaucheService.getEmbauchees();
    this.cvService.selectedCv$.subscribe({
      next: (cv) => {
        if (this.embauchees.includes(cv)) {
          this.toastr.info(`${cv.name} est déjà dans la liste des embauchés`)
        } else {
          this.toastr.info(`${cv.name} n'est pas encore embauché`)
        }
      }
    })
  }
}
