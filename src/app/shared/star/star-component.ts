import {Component, OnChanges,Input,EventEmitter,Output} from '@angular/core';
@Component({
selector: 'star',
templateUrl:'./star-component.html',
styleUrls:['./star-component.css']
})
export class StarComponent implements OnChanges{
 cropWidth:number=75;
 @Input() rating:number=0;
 @Output() handleRatingClick: EventEmitter<string>=new EventEmitter<string>();
 ngOnChanges(): void{
    this.cropWidth=this.rating*75/5
    console.log(this.cropWidth)
 }
 onClick():void{
    this.handleRatingClick.emit('click')
     console.log(this.rating,"rating")
 }
}