import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'short'
})
export class  ShortenPipe implements PipeTransform{
    transform(value:any, size: any){
        console.log(value)
        if(value.length > size) 
        return value.substr(0, size) + "..."
        return value
    }
}