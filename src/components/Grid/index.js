import React from 'react';
import './style.css';

export function Container({ fluid, children }) {
  return <div className={fluid ? "container-fluid" : "container"}>{children}</div>;
}

export function Row({ children }) {
  return <div className="row">{children}</div>;
}

export function Col({ size, offset, children }) {
  return <div className={size.split(" ").map(v=>"col-"+v).join(" ") + (offset ? " " + offset.split(" ").map(v=>"offset-"+v).join(" ") : "")}>{children}</div>;
}