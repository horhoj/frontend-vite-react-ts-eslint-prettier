import React from 'react';

interface ReactStrictModeWrapperProps {
  isStrictModeEnable: boolean;
  children?: React.ReactNode;
}

export function ReactStrictModeWrapper({
  children,
  isStrictModeEnable,
}: ReactStrictModeWrapperProps) {
  return (
    <>
      {isStrictModeEnable ? (
        <React.StrictMode>{children}</React.StrictMode>
      ) : (
        children
      )}
    </>
  );
}
