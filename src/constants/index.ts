const FooterLinkList = [
  {
    parent: "Solutions",
    index: 0,
    items: [
      { link: "/custody-wallet", label: "Custody & wallet" },
      { link: "/exchange", label: "Exchange API" },
      { link: "/checkout-invoicing", label: "Checkout & invoicing" },
      { link: "/tokenization", label: "Tokenization" },
      { link: "/node-service", label: "Node as a service" },
      { link: "/batch-payments", label: "Batch payments" },
      /* { link: "/stablecoin", label: "A euro stablecoin" }, */
    ],
  },
  {
    parent: "About",
    index: 1,
    items: [
      { link: "/about", label: "About us" },
      { link: "/contact", label: "Contact us" },
    ],
  },
  {
    parent: "Insights",
    index: 2,
    items: [
      { link: "/blog", label: "Blog" },
      { link: "/case-studies", label: "Case Studies" },
    ],
  },
  {
    parent: "Quick Links",
    index: 3,
    items: [
      { link: "/cookie-policy", label: "Cookie policy" },
      { link: "/privacy-policy", label: "Privacy policy" },
      { link: "/terms-of-use", label: "Terms of use" },
    ],
  },
];
const Address = `
© 2023 Cryptobunq Incorporated,\nLEI code: 8945003NN6TMUCNVXW94,\nAll Rights Reserved. JCS CH GmbH,\nThis company is a member of SRO.\nGartenstrasse 6, 6300 Zug, Switzerland 	🇨🇭
`;

const Categories = [
  {
    name: "Technology",
    slug: "technology",
    id: "cln8plifidmv10cmn7ceef8gj",
  },
  {
    name: "Crypto",
    slug: "crypto",
    id: "cln8ppl5wdqgo0bjs2lzcxueq",
  },
  {
    name: "Stablecoins",
    slug: "stablecoins",
    id: "cln8prps0drdm0bjsjrwir4en",
  },
  {
    name: "CBQ News",
    slug: "cbq-news",
    id: "cln8si5bd00ly0bla67c2db31",
  },
  {
    name: "Knowledge Hub",
    slug: "knowledge-hub",
    id: "cln8skikq00q50bl5clyatkoh",
  },
];

const HeaderLinkList = [
  {
    parent: "Solutions",
    index: 0,
    items: [
      {
        description: "Store and manage your digital assets",
        href: "/custody-wallet",
        label: "Custody & wallet",
        icon: "/images/nav-custody.svg",
      },
      {
        description: "Send multiple payments in any crypto at once",
        href: "/batch-payments",
        label: "Batch payments",
        icon: "/images/nav-batch.svg",
      },
      {
        description: "Tokenize your digital assets and manage",
        href: "/tokenization",
        label: "Tokenization",
        icon: "/images/nav-tokenization.svg",
      },
      {
        description: "Transform your blockchain and crypto projects",
        href: "/node-service",
        label: "Node as a service",
        icon: "/images/nav-node.svg",
      },
      {
        description: "Exchange your digital assets",
        href: "/exchange",
        label: "Exchange API",
        icon: "/images/nav-exchange.svg",
      },
      {
        description: "Accept crypto and manage & generate invoices",
        href: "/checkout-invoicing",
        label: "Checkout & invoicing",
        icon: "/images/nav-checkout.svg",
      },
      /* {
        description: "Discover our euro stablecoin: EURK",
        href: "/stablecoin",
        label: "A euro stablecoin",
        icon: "/images/nav-stablecoins.svg",
      }, */
    ],
  },
  {
    parent: "About",
    index: 1,
    items: [
      {
        description: "Learn more about Cryptobunq",
        href: "/about",
        label: "About us",
        icon: "/images/nav-about.svg",
      },
      {
        description: "Got any questions? Get in touch",
        href: "/contact",
        label: "Contact us",
        icon: "/images/nav-contact.svg",
      },
    ],
  },
  {
    parent: "Insights",
    index: 2,
    items: [
      {
        description: "Learn latest industrial news",
        href: "/blog",
        label: "Blog",
        icon: "/images/nav-blog.svg",
      },
      {
        description: "Check out latest Web3 reports",
        href: "/case-studies",
        label: "Case Studies",
        icon: "/images/nav-studies.svg",
      },
    ],
  },
];

const PER_PAGE_SIZE = 9;
/**
 * First and skip are parameters of pagination in Graphql,
 * so it is not possible to request all data. 100/100 are
 * specified limit for pagination.  This means increasing
 * the skip one by one for every 100 you request.
 */
const GRAPH_FIRST = 100;
const GRAPH_SKIP = 100;

export {
  Address,
  Categories,
  HeaderLinkList,
  FooterLinkList,
  PER_PAGE_SIZE,
  GRAPH_FIRST,
};
