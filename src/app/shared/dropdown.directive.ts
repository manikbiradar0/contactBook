import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]',
    exportAs: "appDropDown"
})

export class DropdownDirective implements OnInit {

    @HostBinding('class.show') isOpen = false;
    isInside: boolean = false;

    @HostListener('click') dropDown() {
        this.isOpen = !this.isOpen;
        this.isInside = true;
        // if (!this.elRef.nativeElement.classList.contains('show')) {
        //     this.r2.addClass(this.elRef.nativeElement, 'show')
        //     //this.r2.addClass(this.elRef.nativeElement.querySelector('.dropdown-menu'), 'show')
        // }
        // else if(true){
        //     this.r2.removeClass(this.elRef.nativeElement, 'show')
        //     //this.r2.removeClass(this.elRef.nativeElement.querySelector('.dropdown-menu'), 'show')
        // }
    };
    @HostListener('document:click') clickOut(){
        if(!this.isInside) {
            this.isOpen = false
        }
        this.isInside = false
    }

    constructor(private elRef: ElementRef, private r2: Renderer2) {
    }
    ngOnInit() {

    }

}