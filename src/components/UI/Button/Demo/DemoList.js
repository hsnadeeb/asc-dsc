import React, { useMemo } from 'react';
import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items, sortOrder } = props;

  const sortedList = useMemo(() => {
    return items.slice().sort((a, b) => {
      if (sortOrder === 'asc') {
        return a - b;
      } else {
        return b - a;
      }
    });
  }, [items, sortOrder]);

  console.log(items);

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
