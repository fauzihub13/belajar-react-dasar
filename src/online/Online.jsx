import { useOnline } from "./OnlineHook";

export default function Online() {
  const isOnline = useOnline();
  return <>{isOnline ? "Online" : "Offline"}</>;
}
