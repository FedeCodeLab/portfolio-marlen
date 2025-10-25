import Link from "next/link";

interface ItemProps {
  href: string;
  children: React.ReactNode;
}

export const Item = ({ href, children }: ItemProps) => {
  return (
    <li className="py-6 text-[18px] underline">
      <Link href={href}>{children}</Link>
    </li>
  );
};
