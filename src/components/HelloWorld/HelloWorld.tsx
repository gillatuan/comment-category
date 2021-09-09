import * as React from 'react';
import { HelloWorldProps } from './index.d';

export const HelloWorld = (props: HelloWorldProps) => {
  return (
    <div className="hello-world" style={{ color: props.color }}>
      {props.name}
    </div>
  );
}