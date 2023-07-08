import { useMemo, useState } from "react";

export default function useCreatePagination(items, totalPages) {
  const [pagesArray, setPagesArray] = useState([]);

  useMemo(() => {
   let arr = [];

   for(let i = 1; i <= totalPages; i++) {
    arr.push(i)
   }

   setPagesArray(arr)

  }, [items.length, totalPages]);

  return pagesArray;
}
