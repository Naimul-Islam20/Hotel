"use client";
import { useState, useEffect } from "react";

export default function FullPageLoader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay (যত খুশি বাড়াতে পারো)

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen fixed inset-0 z-[9999] bg-white flex items-center justify-center">
        {/* ঘুরঘুর Animation */}
        <div className="w-16 h-16 border-6 border-blue-500 border-dashed rounded-full animate-spin slow-spin"></div>

      </div>
    );
  }

  return <>{children}</>;
} 