const ROUTES = [
  { id: "home", img: "home.svg", href: "/home", label: "Home" },
  { id: "my_lands", img: "user.svg", href: "/my_lands", label: "MyLands" },
  {
    id: "mint_land",
    img: "create.svg",
    href: "/mint_land",
    label: "MintLand",
  },
  {
    id: "market",
    img: "create.svg",
    href: "/market",
    label: "Market",
  },
  {
    id: "search",
    img: "search.svg",
    href: "/search",
    label: "Search",
  },
];

const FEATURES = [
  {
    id: "decentralized",
    title: "Decentralized",
    description:
      "Utilizing a distributed network of nodes of Chromia Blockchain, ensuring no central authority controls the data, promoting resilience and autonomy.",
  },
  {
    id: "transparency",
    title: "Transparency",
    description:
      "Offering a public ledger accessible to all participants, allowing for open verification of transactions and data integrity",
  },
  {
    id: "enhanced_security",
    title: "Enhanced Security",
    description:
      "Robust encryption and consensus mechanisms to safeguard transactions and data, enhancing protection against unauthorized access and fraud.",
  },
  {
    id: "trustless_transactions",
    title: "Trustless Transactions",
    description:
      "Facilitating trustless transactions through automated process and cryptographic proofs powered by Chromia Relational Blockchain, thereby allowing parties to interact directly without relying on intermediaries.",
  },
  {
    id: "fully_on_chain",
    title: "Fully On-Chain",
    description:
      "We execute all processes directly on a blockchain, ensuring a complete and immutable record of transactions and data interactions.",
  },
];

const FAQ = [
  {
    question: "What is Plot Wonders?",
    answer:
      "Plot Wonders is a NFT marketplace for buying, selling and auctioning unique NFT lands built on the Chromia Relational Blockchain.",
  },
  {
    question: "How do I enter Plot Wonders?",
    answer:
      "Simply click the 'Launch Dapp' button and connect your wallet to enter the Plot Wonders marketplace universe.",
  },
  {
    question: "Do I need a cryptocurrency wallet?",
    answer:
      "Yes, you need a popular EVM-compatible cryptocurrency wallet - MetaMask to connect to the Plot Wonders world.",
  },
  {
    question: "What is Land?",
    answer:
      "LAND is an NFT created and maintained on the Chromia Relational Blockchain. Each LAND includes a record of its owner and other key details.",
  },
  {
    question: "What is an NFT?",
    answer:
      "NFT stands for Non-Fungible Token, a unique digital asset authenticated by blockchain technology. NFTs are often used to represent ownership or authenticity of digital art, collectibles, or other unique items on the Chromia Relational Blockchain.",
  },
  {
    question: "What does owning virtual LAND mean and how does it work?",
    answer:
      "Owning LAND within Plot Wonders is akin to owning any other unique crypto asset, such as CryptoKitties or CryptoPunks. Each LAND is a unique NFT token that tracks ownership on the Chromia blockchain.",
  },
  {
    question: "Who validates transactions?",
    answer:
      "Transactions related to LAND on Plot Wonders are registered by the LAND Rell DApp and recorded on the Chromia blockchain. These transactions, such as changes in land contents or ownership transfers, are verified by the Chromia blockchain.",
  },
];

const LANDS = [
  {
    category: "STANDARD",
    description: "My First Land is Great",
    id: {
      type: "Buffer",
      data: [
        214, 52, 160, 30, 70, 95, 53, 227, 165, 132, 81, 215, 16, 232, 44, 163,
        77, 201, 237, 1, 46, 182, 126, 129, 157, 238, 184, 20, 80, 60, 227, 57,
      ],
    },
    name: "My First Land",
    owner: 9,
    ownership_changed_at: 1722490408649,
    rowid: 14,
    size: "1x1",
  },
  {
    category: "STANDARD",
    description: "My First Land is Great",
    id: {
      type: "Buffer",
      data: [
        216, 240, 164, 114, 208, 13, 227, 13, 218, 133, 16, 122, 131, 89, 57,
        189, 131, 85, 239, 89, 202, 65, 76, 81, 150, 201, 84, 181, 204, 173,
        246, 158,
      ],
    },
    name: "My First Land",
    owner: 9,
    ownership_changed_at: 1722491023923,
    rowid: 17,
    size: "1x1",
  },
  {
    category: "STANDARD",
    description: "My First Land is Great",
    id: {
      type: "Buffer",
      data: [
        85, 1, 57, 94, 107, 42, 45, 190, 72, 89, 65, 223, 199, 40, 38, 42, 2,
        184, 97, 121, 173, 75, 143, 172, 198, 254, 212, 156, 51, 213, 207, 131,
      ],
    },
    name: "My First Land",
    owner: 9,
    ownership_changed_at: 1722491081390,
    rowid: 18,
    size: "1x1",
  },
  {
    category: "STANDARD",
    description: "My First Land is Great",
    id: {
      type: "Buffer",
      data: [
        182, 177, 219, 187, 69, 106, 34, 11, 75, 72, 146, 248, 220, 246, 184,
        209, 107, 31, 93, 26, 128, 73, 92, 116, 252, 246, 0, 244, 14, 8, 223,
        171,
      ],
    },
    name: "My First Land",
    owner: 9,
    ownership_changed_at: 1722491111727,
    rowid: 19,
    size: "1x1",
  },
];

const LAND_DESC = {
  STANDARD:
    "Standard lands are common and widely available. They provide basic functionality and are often used as a foundation for more specialized features.",
  SOLID:
    "Solid lands are reliable and sturdy. They offer consistent performance and are favored by individuals for their stability.",
  SUPERIOR:
    "Superior lands excel in certain aspects. They might have enhanced features, better performance, or unique capabilities.",
  EPIC: "Epic lands are rare and powerful. They offer exceptional functionality and are sought after by experienced users.",
  LEGENDARY:
    "Legendary lands are the pinnacle of excellence. They are highly coveted, possess extraordinary abilities, and are often associated with remarkable achievements.",
};

export { ROUTES, FEATURES, FAQ, LANDS, LAND_DESC };
