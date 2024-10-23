export class FaqsModel {
  public title: string;
  public content: string;

  constructor(data: any) {
    this.title = data.title;
    this.content = data.content
  }
}
