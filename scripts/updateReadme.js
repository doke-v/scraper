const { writeFile } = require("fs/promises");
const { DateTime } = require("luxon");
const filePath = `${process.cwd()}/README.md`;

const updateReadme = async (collectionSize) => {
  const date = DateTime.now().setZone("Europe/Tallinn").setLocale("et");
  const content = `Current collection size: **${collectionSize}**  
Updated at: *${date.toLocaleString(DateTime.DATETIME_MED)}*`;

  await writeFile(filePath, content, {
    encoding: "utf8",
  });
};

module.exports = updateReadme;
