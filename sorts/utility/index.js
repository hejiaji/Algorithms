const shouldSwap = (pre, next, isAsc) =>
  isAsc ? pre > next : pre <= next;

export { shouldSwap };
