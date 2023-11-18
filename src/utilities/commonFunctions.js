import React from 'react'


export const dateFormatting = (date) => {
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleDateString()
  const formattedTime = dateObject.toLocaleTimeString()
  return ({ date: formattedDate, time: formattedTime });
}

export function GroupNaming({ names, maxNames }) {
  if (!names || names.length === 0) {
    return null;
  }

  const visibleNames = names.slice(0, maxNames);
  const remainingCount = names.length - maxNames;

  return (
    <div>
      {visibleNames.map((name, index) => (
        <span key={index}>{name}{visibleNames.length - 1 !== index && ","} </span>
      ))}
      {remainingCount > 0 && <span>{`& ${remainingCount} more`}</span>}
    </div>
  );
}

let lastIndex = -1;
export function randomColors(colors) {
  if (colors.length === 0) {
    return null;
  }
  lastIndex = (lastIndex + 1) % colors.length;
  return colors[lastIndex];
};


