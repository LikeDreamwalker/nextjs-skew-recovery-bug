"use client";
import { logServer1 } from "../actions";

export function CallServerActionButton() {
  return <button onClick={logServer1}>Server Action</button>;
}
