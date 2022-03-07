import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ConveyerOptions, REACTIVE_CONVEYER } from '@egjs/conveyer';
import { useReactive } from './cfc/useReactive';
import { ANGULAR_CONVEYR_EVENTS } from './consts';
import { NgxConveyerInterface } from './ngx-conveyer.interface';


@Directive({
  selector: '[ngxConveyer]',
  exportAs: "ngxConveyer",
  outputs: ANGULAR_CONVEYR_EVENTS,
})
export class NgxConveyerDirective extends NgxConveyerInterface {
  // manual options(props)
  @Input() public ngxConveyer!: ConveyerOptions | "";
  // @Output("a") a: EventEmitter<OnFinish> = new EventEmitter();
  // automatic methods, reactive state
  protected reacitveConveyer = useReactive(this, {
    data: () => {
      return {
        container: { current: this._elRef.nativeElement! },
        props: this.ngxConveyer || {},
      };
    },
    ...REACTIVE_CONVEYER,
  });
  // constructor
  constructor(private _elRef: ElementRef<HTMLElement>) {
    super();
    (this as any).ab = new EventEmitter<any>();
  }

  // manual mounted
  ngAfterViewInit() {
    this.reacitveConveyer.mounted();

    setTimeout(() => {
      ((this as any).ab as EventEmitter<any>).emit(1);
    }, 100);
  }
  // manual destory
  ngOnDestroy() {
    this.reacitveConveyer.destroy();
  }
}

Output("a")(NgxConveyerDirective.prototype, "ab");
export interface NgxConveyerDirective {
  a: EventEmitter<any>;
}
