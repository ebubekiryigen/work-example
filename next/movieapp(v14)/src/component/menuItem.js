import Link from "next/link";

export default function MenuItem({mn}) {
    return (
      <Link href={mn.url}>
        {mn.name}
      </Link>
    );
  }
