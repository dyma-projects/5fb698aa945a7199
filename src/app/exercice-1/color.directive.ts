import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  @Input("appColor") data;
  @HostBinding("style.color") color: string;

  @HostListener("window:keydown", ["$event"]) onInput(event) {
    console.log(this.data);
    if (event.keyCode == 37) {
      this.color = this.data.leftColor;
    } else if (event.keyCode == 39) {
      this.color = this.data.rightColor;
    } else if (event.keyCode == 38) {
      this.color = this.data.upColor;
    } else if (event.keyCode == 40) {
      this.color = this.data.downColor;
    }
  }
}
