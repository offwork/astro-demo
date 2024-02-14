//////////////////////////////////////////////////////////////////////
///////////////////////                        ///////////////////////
/////////////////          HELPER METHODS          ///////////////////
///////////////////////                        ///////////////////////
//////////////////////////////////////////////////////////////////////
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function SplitFirstWord(str: string) {
  return str.replace(/\s+/g, "");
}

const isEmptyObject = (obj: object) => Boolean(Object.keys(obj).length);

const capitalize = (str: string) => {
  const words =
    str.length > 1
      ? str
          .split("-")
          .map((el) =>
            el[0].toUpperCase().concat(...el.substring(1, el.length))
          )
      : [""];
  return words.join().replace(/[\s,]/g, " ");
};

function transformObjectToParams(object: {
  [key: string]: string | number | undefined | null;
}) {
  const params = Object.entries(object)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
    );

  return params.length > 0 ? `?${params.join('&')}` : '';
}

//////////////////////////////////////////////////////////////////////
///////////////////////                        ///////////////////////
///////////////////          EXPORT UTILS          ///////////////////
///////////////////////                        ///////////////////////
//////////////////////////////////////////////////////////////////////
export {
  SplitFirstWord,
  capitalize,
  classNames,
  isEmptyObject,
  transformObjectToParams,
};
