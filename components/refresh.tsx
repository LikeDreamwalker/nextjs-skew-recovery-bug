"use client";

import { useEffect, useState } from "react";

export default function Refresh() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          window.location.href = "/";
          return 0;
        }
        return prevCount - 1;
      });
      console.log(123456);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Updating Application</h1>
        <p className="text-gray-600 mb-4">
          Please wait while we refresh to the latest version...
        </p>
        <p className="text-xl font-semibold">
          Refreshing in {countdown} second{countdown !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
