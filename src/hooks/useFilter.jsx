import React from 'react'

export default function useFilter(arr) {
  const filtered = [...new Map(arr.map(el => [el.name, el])).values()];
  return filtered;
}
