require("dns").setServers(["8.8.8.8"]);
require("dotenv").config();
const mongoose = require("mongoose");

const initialCategories = [
  {
    name: "Market Economics",
    slug: "economics",
    priority: 1,
    heading: "Industry Trends Reshaping the Market",
    subheading:
      "Key shifts in markets, consumer demand, competition and the economic forces influencing industries.",
    eyebrow: "Finance & Economics",
    image: "/images/investment.png",
    showInNavbar: true,
    showInFooter: true,
    status: true,
  },
  {
    name: "Business",
    slug: "business",
    priority: 2,
    heading: "Business Strategies for a Changing Economy",
    subheading:
      "Insights into growth, leadership, innovation, entrepreneurship and the decisions shaping modern businesses.",
    eyebrow: "Enterprise & Innovation",
    image: "/images/business.png",
    showInNavbar: true,
    showInFooter: true,
    status: true,
  },
  {
    name: "Public Policy",
    slug: "public-policy",
    priority: 3,
    heading: "Policies Shaping Business and Society",
    subheading:
      "Exploring how government policies, regulations and economic decisions affect businesses and communities.",
    eyebrow: "Governance & Society",
    image: "/images/health.png",
    showInNavbar: true,
    showInFooter: true,
    status: true,
  },
  {
    name: "Education",
    slug: "education",
    priority: 4,
    heading: "The Future of Education and Skills",
    subheading:
      "Examining changing education models, workforce skills, technology and the evolving needs of learners.",
    eyebrow: "Learning & Workforce",
    image: "/images/education.png",
    showInNavbar: true,
    showInFooter: true,
    status: true,
  },
  {
    name: "Other Interests",
    slug: "other-interests",
    priority: 5,
    heading: "Ideas Beyond Business and Economics",
    subheading:
      "Perspectives on technology, society, culture and other developments influencing the world around us",
    eyebrow: "Culture & Perspectives",
    image: "/images/listing-banner.png",
    showInNavbar: true,
    showInFooter: true,
    status: true,
  },
];

async function run() {
  const uri = process.env.MONGO_URI || process.env.LOCAL_MONGO_URI;
  await mongoose.connect(uri);
  const Category = require("../database/models/blogCategoryModel");

  console.log("Connected to database, seeding categories...");

  for (const catData of initialCategories) {
    // Find by slug or existing name
    let doc = await Category.findOne({
      $or: [
        { slug: catData.slug },
        { name: new RegExp(`^${catData.name}$`, "i") },
        // handle legacy "Economics" matching
        ...(catData.slug === "economics" ? [{ name: /Economics/i }] : []),
        ...(catData.slug === "other-interests" ? [{ name: /Other interests/i }] : []),
      ],
    });

    if (doc) {
      console.log(`Updating existing category: ${doc.name} -> ${catData.name}`);
      doc.name = catData.name;
      doc.slug = catData.slug;
      doc.heading = catData.heading;
      doc.subheading = catData.subheading;
      doc.eyebrow = catData.eyebrow;
      doc.image = catData.image;
      doc.priority = catData.priority;
      doc.showInNavbar = catData.showInNavbar;
      doc.showInFooter = catData.showInFooter;
      doc.status = true;
      doc.isDeleted = false;
      await doc.save();
    } else {
      console.log(`Creating new category: ${catData.name}`);
      await Category.create(catData);
    }
  }

  const all = await Category.find({ isDeleted: false }).sort({ priority: 1 });
  console.log(`Finished! Total categories: ${all.length}`);
  all.forEach((c) =>
    console.log(
      `[Priority ${c.priority}] ${c.name} (${c.slug}) -> Heading: "${c.heading}"`
    )
  );

  await mongoose.disconnect();
}

run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seed error:", err);
    process.exit(1);
  });
