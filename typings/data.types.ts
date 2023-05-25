export interface IData {
  name: string;
  title: string;
  descriptions: string[];
  links: {
    type:
      | "email"
      | "instagram"
      | "squarelogic"
      | "linkedin"
      | "pinterest"
      | "behance";
    value: string;
  }[];
  footerTitle: string;
}
