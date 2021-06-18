const FileSync = require("lowdb/adapters/FileSync");
const low = require("lowdb");
const axios = require("axios");
const cheerio = require("cheerio");
const updateReadme = require("./updateReadme");

const adapter = new FileSync(`${process.cwd()}/db/data.json`);
const db = low(adapter);

db.defaults({ horoscopes: [] }).write();
const horoscopes = db.get("horoscopes");

const getHoroscopes = () => {
  axios
    .get("https://www.delfi.ee/misc/common/pc/pages/horoscope.php")
    .then(({ data }) => {
      const $ = cheerio.load(data);
      $(".horoscope__content").each((_i, element) => {
        const horoscope = $(element).text().trim();
        if (!horoscopes.includes(horoscope).value()) {
          horoscopes.push(horoscope).write();
        }
      });
      const collectionSize = horoscopes.size().value();
      updateReadme(collectionSize);
    });
};

getHoroscopes();
