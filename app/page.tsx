import { CallServerActionButton } from "../components/call-server-action-button";
import { ThrowErrorButton } from "../components/throw-error-button";
import DynamicContent from "@/components/dynamic";
/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <CallServerActionButton />
      <ThrowErrorButton />
      <DynamicContent />
    </>
  );
}
