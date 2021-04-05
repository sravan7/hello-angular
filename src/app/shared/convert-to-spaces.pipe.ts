import {Pipe,PipeTransform} from '@angular/core'
@Pipe({
 name: 'converttospaces'
})
export class ConvertToSpaces implements PipeTransform{
    transform(value:string,char:string):string{
        let newValue = value.replace(char,' ')
        return newValue
    }
}
