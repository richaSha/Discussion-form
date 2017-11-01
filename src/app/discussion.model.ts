export class Discussion {
  public delete: boolean = false;
  public dataIcon: string='glyphicon-plus';
  public show: boolean= false;
  constructor (public category: string, public title:string, public discussion: string, public id: number){}
}
