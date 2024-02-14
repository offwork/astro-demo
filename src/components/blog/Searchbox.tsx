import type { Search } from "../../models";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import type { FocusEvent, KeyboardEvent } from "react";

export default function Searchbox({
  data,
  gotoPost,
}: {
  data: Search[];
  gotoPost: (path: string) => void;
}) {
  const [selected, setSelected] = useState<Search[]>(null!);
  const [query, setQuery] = useState("");

  const filteredPosts =
    query === ""
      ? data
      : data.filter((post) =>
          post.title
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const onDisplayValue = (element: Search) => {
    /* the following statement decides whether to show the placeholder or not */
    return element ? element?.title : "";
  };

  const onDisplayBlur = (event: FocusEvent) => {
    /* the following statement decides whether to show the placeholder or not */
    const input = event.target as HTMLInputElement;
    input.value = "";
  };

  const onKeyboardHandler = (event: KeyboardEvent) => {
    event.preventDefault();
    if (event.code === "Enter") {
      const searchPost = selected as unknown as Search;
      if (searchPost && searchPost.slug) {
        gotoPost(`/blog/${searchPost.slug}`);
      }
    }
  };

  return (
    <div className="abolute w-full h-full  mx-auto md:max-w-[466px]">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden">
            <Combobox.Input
              className="relative block w-full bg-white appearance-none rounded-full border border-gray-300 px-6 pl-10 pr-4 text-sm text-black font-light placeholder-black-400 min-h-[52px] focus:outline-none focus:border-teal-600"
              displayValue={onDisplayValue}
              onBlur={(e) => onDisplayBlur(e)}
              placeholder="Search our blog"
              onChange={(event) => setQuery(event.target.value)}
              onKeyUp={onKeyboardHandler}
            />
            <Combobox.Button className="absolute inset-y-0 left-0 flex items-center pl-4">
              <MagnifyingGlassIcon
                className="text-gray-700 h-5 w-5"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPosts.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <Combobox.Option
                    key={post.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-600"
                      }`
                    }
                    value={post}
                  >
                    {({ selected, active }) => (
                      <a href={`/blog/${post.slug}`}>
                        <span
                          className={`text-center block truncate ${
                            selected ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {post.title}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-gray" : "text-gray-900"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </a>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
