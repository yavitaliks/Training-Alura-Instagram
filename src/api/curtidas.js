import { useCallback } from "react";

export function likeFoto(like, qntlike) {
  let qnt = qntlike;
  if (like) {
    qnt--;
  } else {
    qnt++;
  }
  return [!like, qnt];
}
