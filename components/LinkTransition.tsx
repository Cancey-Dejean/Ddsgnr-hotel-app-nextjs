import { Link } from "next-view-transitions"
import { LinkProps } from "next/link"
export default function LinkTransition({ href, children }: LinkProps) {
  return <Link href={href}>{children}</Link>
}
