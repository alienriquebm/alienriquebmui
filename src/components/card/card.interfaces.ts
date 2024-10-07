export interface ICard {
  bordered?: boolean;
  children?: React.ReactNode;
  className?: HTMLElement['className'];
  title?: React.ReactNode;
  titleClassName?: string;
  transparent?: boolean;
  dataCy?: string;
}
