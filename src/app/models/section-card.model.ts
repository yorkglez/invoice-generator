export class SectionCardModel {
  public backgroundColor?: string;
  public textColor: string;
  public width?: string;
  public height?: string;
  public logo: string;
  public padding: string;
  public logoPosition?: string;
  public buttons: {
    backgroundColor: string;
    textColor: string;
    text: string;
    href: string;
  };
  public titleContent: {
    title: string;
    size: string;
    align: string;
  };
  public descriptionContent: {
    description?: string;
    image?: string;
    imagePosition?: string;
    imageSize?: string;
  };

  constructor(data?: any) {
    this.backgroundColor = data.backgroundColor || '';
    this.textColor = data.textColor || '';
    this.width = data.width || '';
    this.height = data.height || '';
    this.buttons = data.buttons || null;
    this.titleContent = data.titleContent || {};
    this.descriptionContent = data.descriptionContent || {};
    this.logo = data.logo || '';
    this.logoPosition = data.logoPosition || '';
    this.padding = data.padding || '';
    this.height = data.height || '';
  }
}
