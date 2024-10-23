export class ManageCardsModel {
  public title: string;
  public content: string;
  public icon: string;

  constructor(data?: any) {
    this.title = data.title;
    this.content = data.content;
    this.icon = data.icon;
  }
}
