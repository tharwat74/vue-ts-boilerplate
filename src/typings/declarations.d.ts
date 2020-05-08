declare module "*.sass" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.png";
declare module "*";
declare module "*vue-material";
declare module "*!text" {
  const _: string;
  export default _;
}
