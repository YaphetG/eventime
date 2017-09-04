import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name :'searchFilter',
    pure : false
})
export class SearchFilter implements PipeTransform{
    transform(items :  any[],filter:any){
        items.filter(item=> filter!='' ? item.indexOf(filter)!=-1 : true );
    }
}


