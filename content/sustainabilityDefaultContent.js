module.exports = {
  breadcrumb: { title: "Sustainability", bannerImage: "" },
  intro: {
    title: "What sustainability means in practice",
    paragraphs: [
      "Sustainability is the ability to maintain or support a process, system, or core resource over a long period of time. It rests on three pillars -- environmental, economic and social -- and shows up as much in everyday choices as it does in industrial policy.",
      "This page sets out those pillars and some familiar examples, then turns to the two regulations that reach the fan industry most directly: Extended Producer Responsibility (EPR), which makes producers answerable for their products once the consumer is finished with them, and the Restriction of Hazardous Substances (RoHS), which limits the toxic materials permitted in electrical and electronic equipment -- together with the marking, certification and self-declaration expected from suppliers.",
    ],
  },
  sections: [
    { id: "core-pillars", title: "Core Pillars", items: [
      { label: "Environmental", description: "Protecting natural habitats, reducing waste, and using renewable energy sources like solar and wind." },
      { label: "Economic", description: "Creating profitable business models and stable financial growth that do not deplete natural assets." },
      { label: "Social", description: "Ensuring all people have fair access to basic resources, health, and community well-being without exploitation." },
    ], paragraphs: [], groups: [], images: [] },
    { id: "examples", title: "Examples", items: [
      { label: "Green Transport", description: "Driving electric vehicles, walking, or using local public transit." },
      { label: "Responsible Consumption", description: "Avoiding single-use plastics and recycling household goods." },
      { label: "Drives Green Innovation", description: "The Restriction of Hazardous Substances (RoHS) forces manufacturers to research safe chemical alternatives, creating cleaner supply chains." },
      { label: "Reduces E-Waste Toxicity", description: "Restricting heavy metals like lead, mercury, and cadmium prevents toxic chemicals from leaching into soil and groundwater from landfills." },
    ], paragraphs: [], groups: [], images: [] },
    { id: "epr", title: "What is EPR?", paragraphs: [
      "EPR stands for Extended Producer Responsibility. Basically, applied on fan's EPS, PP Strap and Bopp Tape along with EPR & recycle logo addition. Refer below images for tentative sizes of the logos and a reference certificate. Certificate is provided by \"Central and / or State Pollution Control Board\".",
      "It must be with manufacturer or / and supplier along with their declaration as well.",
    ], items: [
      { label: "Definition", description: "An environmental policy approach that makes manufacturers, importers, and brand owners responsible for the entire lifecycle of their products." },
      { label: "Core Duty", description: "Companies must handle the collection, recycling, and safe disposal of items after consumers finish using them." },
      { label: "Main Goal", description: "It shifts the burden of waste management away from local towns and taxpayers back to the creators of the goods." },
    ], groups: [{ title: "Key Areas", items: [
      { label: "E-Waste", description: "Managing old electronics and electrical goods." },
      { label: "Plastic Waste", description: "Handling packaging and single-use plastics." },
      { label: "Other Goods", description: "Covering batteries, tires, and used oil." },
    ] }], images: [] },
    { id: "rohs", title: "RoHS", paragraphs: [
      "RoHS stands for the Restriction of Hazardous Substances Directive. It is a European Union regulation created in 2002 that limits the use of ten dangerous materials -- such as lead, mercury, and cadmium -- in electrical and electronic equipment to protect human health and the environment.",
      "Ten hazardous materials in electrical and electronic equipment. Maximum permitted levels are capped at 0.1% by weight (except for cadmium, which is limited to 0.01%).",
    ], items: [
      { label: "Main Goal", description: "Stop toxic e-waste from hurting soil, water, and people during use or recycling." },
      { label: "Restricted Materials", description: "Limits 10 specific substances including lead, mercury, cadmium, hexavalent chromium, and various plastic softeners (phthalates)." },
      { label: "Who It Affects", description: "Makers, sellers, and importers of electronic items, large home appliances, computers, and toys." },
      { label: "Global Impact", description: "While it started in Europe, many countries now follow these same rules so they can trade electronic parts worldwide." },
    ], groups: [
      { title: "Heavy Metals", items: ["Lead (Pb)", "Mercury (Hg)", "Cadmium (Cd)", "Hexavalent Chromium (Cr VI)"].map((label) => ({ label, description: "" })) },
      { title: "Flame Retardants", items: ["Polybrominated Biphenyls (PBB)", "Polybrominated Diphenyl Ethers (PBDE)"].map((label) => ({ label, description: "" })) },
      { title: "Phthalates (Plasticizers)", items: ["Bis(2-ethylhexyl) phthalate (DEHP)", "Butyl benzyl phthalate (BBP)", "Dibutyl phthalate (DBP)", "Di-isobutyl phthalate (DIBP)"].map((label) => ({ label, description: "" })) },
      { title: "Normal Practice in Fan Industries", items: [
        { label: "Self-declaration", description: "Supplier / manufacturer needs to provide self-declaration along with at least 1 RoHS test certificate of the commodity parts being supplied." },
        { label: "Accredited testing", description: "RoHS test certificate should be from a NABL accredited lab only." },
        { label: "Part descriptions", description: "If Part / SAP codes change frequently, supplier can use a part description such as Canopy instead of codes." },
      ] },
    ], footerParagraphs: ["Self-declaration form for reference."], images: [] },
  ],
  seo: { metaTitle: "Sustainability", metaDescription: "IFMA sustainability, EPR and RoHS practices.", keywords: ["sustainability", "EPR", "RoHS", "IFMA"] },
};
