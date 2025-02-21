"use client";
export function ThrowErrorButton() {
  return (
    <button
      onClick={() => {
        throw new Error("Hey!");
      }}
    >
      Throw Error
    </button>
  );
}
