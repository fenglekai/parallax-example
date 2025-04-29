import Link from "next/link";

export interface RouterItem {
  title: string;
  href: string;
}

export default async function Router({ router }: { router: RouterItem[] }) {
  return (
    <ul>
      {router.map((route) => (
        <li key={route.href}>
          <Link href={route.href}>{route.title}</Link>
        </li>
      ))}
    </ul>
  );
}
