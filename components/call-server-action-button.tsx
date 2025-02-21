"use client";
import { logServer } from "../actions";

export function CallServerActionButton() {
  return <button onClick={logServer}>Server Action</button>;
}
