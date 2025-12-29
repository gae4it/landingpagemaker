"use client";

import { useState } from "react";

export function useCopyNotification(timeout = 2000) {
  const [show, setShow] = useState(false);

  const trigger = () => {
    setShow(true);
    setTimeout(() => setShow(false), timeout);
  };

  return [show, trigger] as const;
}
