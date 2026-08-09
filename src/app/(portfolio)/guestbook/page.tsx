import { permanentRedirect } from "next/navigation";

export default function GuestBookMain() {
  permanentRedirect("/about");
}
