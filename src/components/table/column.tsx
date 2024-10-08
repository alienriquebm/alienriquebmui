import { Column as RAColumn, type ColumnProps } from 'react-aria-components';

interface IRAColumn extends ColumnProps {
  dataCy?: string;
}

export function Column(props: IRAColumn) {
  return (
    <RAColumn data-cy={props.dataCy} {...props}>
      {props.children}
    </RAColumn>
  );
}
