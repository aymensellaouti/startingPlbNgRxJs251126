import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Cv } from '../model/cv';
import { NgStyle } from '@angular/common';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NgStyle, DefaultImagePipe]
})
export class ItemComponent {
  @Input() cv: Cv | null = null;
  @Input() size = 50;
  constructor() {}
  @Output() selectCv = new EventEmitter<Cv>();

  onSelectCv() {
    if (this.cv) this.selectCv.emit(this.cv);
  }
}
