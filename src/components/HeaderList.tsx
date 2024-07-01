import Link from "next/link";

const HeaderList = ({
  title,
  linkTitle,
  linkHref,
}: {
  title: string;
  linkTitle?: string;
  linkHref?: string;
}) => {
  return (
    <div className="flex justify-between items-center my-10">
      <h3 className="text-black text-xl pb-2 font-bold border-b-2 w-max border-red-700">
        {title}
      </h3>
      {linkHref && linkTitle && (
        <Link
          className="text-white font-medium text-xs rounded-md shadow-xl bg-red-700 px-4 py-2"
          href={linkHref}
        >
          {linkTitle}
        </Link>
      )}
    </div>
  );
};

export default HeaderList;
