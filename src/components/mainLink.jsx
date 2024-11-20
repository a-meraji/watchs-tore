import Link from "next/link";

function MainLink({ title, href }) {
  return (
    <Link
      className="bg-blue-500 text-center px-6 py-2 rounded-md text-white font-bold text-lg mx-auto"
      href={href}
    >
      {title}
    </Link>
  );
}

export default MainLink;
