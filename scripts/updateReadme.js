const { writeFile } = require("fs/promises");
const filePath = `${process.cwd()}/README.md`;

const updateReadme = async (collectionSize) => {
  const content = `Current collection size: **${collectionSize}**  
Updated at: *${new Date()}*`;

  await writeFile(filePath, content, {
    encoding: "utf8",
  });
};

module.exports = updateReadme;
