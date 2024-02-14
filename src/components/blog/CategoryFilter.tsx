import { Categories } from "../../constants";
import { classNames } from "../../utils";

export default function CategoryFilter({ tag }: { tag?: string }) {
  const pathName = typeof window !== "undefined" ? window.location.pathname : "/"

  const isActive = (slug: string) => {
    return pathName.includes(slug);
  };

  return (
    <div className="flex overflow-y-hidden w-full justify-start items-center gap-2 mt-20 py-4 md:gap-4 lg:py-0 lg:mt-32 lg:justify-center mb-14">
      <a
        href="/blog"
        className={classNames(
          !pathName.includes("/blog/category")
            ? "bg-teal-600 text-white"
            : "bg-white text-gray-700",
          "flex whitespace-nowrap justify-center cursor-pointer border border-gray-100 rounded-md p-2 text-base md:text-lg md:p-3 md:rounded-lg lg:text-xl"
        )}
      >
        View All
      </a>
      {Categories.map((category) => (
        <a
          href={`/blog/category/${category.slug}/1`}
          key={category.id}
          className={classNames(
            isActive(category.slug)
              ? "bg-teal-600 text-white"
              : "bg-white text-gray-700",
            "flex whitespace-nowrap justify-center cursor-pointer border border-gray-100 rounded-md p-2 text-base md:text-lg md:p-3 md:rounded-lg lg:text-xl"
          )}
        >
          {category.name}
        </a>
      ))}
    </div>
  );
}
