import { graphAssetsLoader } from "../../utils";
import ReactMarkdown from "react-markdown";

export default function CBQPostBody({ content }: { content: string }) {
  return (
    <>
      <ReactMarkdown
        className="leading-relaxed break-words lg:text-lg"
        components={{
          h2: (props) => {
            return (
              <h2
                className="text-2xl mt-8 mb-4 lg:mt-12 lg:text-3xl lg:leading-snug"
                {...props}
              >
                {props.children}
              </h2>
            );
          },
          h3: (props) => {
            return (
              <h3
                className="text-xl mt-6 mb-4 lg:mt-8 lg:text-2xl lg:leading-snug"
                {...props}
              >
                {props.children}
              </h3>
            );
          },
          p: (props) => {
            return (
              <p className="my-6" {...props}>
                {props.children}
              </p>
            );
          },
          ol: (props) => {
            return (
              <ol className="my-6 list-disc list-inside" {...props}>
                {props.children}
              </ol>
            );
          },
          ul: (props) => {
            return (
              <ul className="my-6 list-disc list-inside" {...props}>
                {props.children}
              </ul>
            );
          },
          li: (props) => {
            return (
              <li className="-indent-6 pl-5 my-4" {...props}>
                {props.children}
              </li>
            );
          },
          blockquote: (props) => {
            return (
              <blockquote className="my-6" {...props}>
                {props.children}
              </blockquote>
            );
          },
          a: (props) => {
            if (props.href?.length) {
              const href = props.href;
              const children = Array.isArray(props.children)
                ? props.children[0]
                : props.children;
              return (
                <a
                  className="text-amber hover:underline"
                  href={href}
                  target="_blank"
                >
                  {children}
                </a>
              );
            }
            return null;
          },
          img: (props) => {
            if (props.src?.length) {
              const alt = props.alt || "Unnamed post image!";
              const altText =
                alt
                  .replace(/\.[^\/.]+$/, "")
                  .split("-")
                  .join(" ") || alt;
              return (
                <img
                  src={graphAssetsLoader({ src: props.src, width: 896 })}
                  alt={altText}
                  width={896}
                  height={499}
                />
              );
            }
            return null;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </>
  );
}
