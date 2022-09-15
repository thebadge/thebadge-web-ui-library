import * as React from 'react';
import { IconProps } from '../IconProps'

export const IconMedium = (props: IconProps) => {
  return (
    <a href={props.link} target={'_blank'} rel="noreferrer">
      <svg
        width={24}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={props.color}
        {...props}
      >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zM9.574 16.741H6v-.202l1.261-1.529a.61.61 0 0 0 .162-.526V9.18a.464.464 0 0 0-.151-.392l-1.121-1.35v-.201H9.63l2.689 5.897 2.364-5.897H18v.201l-.958.919a.277.277 0 0 0-.106.269v6.748a.277.277 0 0 0 .106.269l.936.919v.201h-4.706v-.201l.969-.941c.095-.095.095-.123.095-.269V9.897l-2.695 6.844h-.364L8.14 9.897v4.587a.631.631 0 0 0 .174.526l1.26 1.529v.202z" />
      </svg>
    </a>
  );
};
