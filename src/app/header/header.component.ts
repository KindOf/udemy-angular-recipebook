import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() public showComponent = new EventEmitter<string>();

  public onSelect(view): void {
    this.showComponent.emit(view);
  }
}
