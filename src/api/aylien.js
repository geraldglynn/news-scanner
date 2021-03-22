var AylienNewsApi = require("aylien-news-api");

var defaultClient = AylienNewsApi.ApiClient.instance;

var app_id = defaultClient.authentications["app_id"];
app_id.apiKey = '64665999';

var app_key = defaultClient.authentications["app_key"];
app_key.apiKey = '72c4d3764c7ace98cdd12ef6962ed37d';

var api = new AylienNewsApi.DefaultApi();

var opts = {
  title: "trump",
  sortBy: "social_shares_count.facebook",
  notLanguage: ["en"],
  publishedAtStart: "NOW-7DAYS",
  publishedAtEnd: "NOW",
  entitiesBodyLinksDbpedia: [
    "http://dbpedia.org/resource/Donald_Trump",
    "http://dbpedia.org/resource/Hillary_Rodham_Clinton"
  ]
};

function fetchStories(callback, res) {
  api.listStories(opts, (error, data) => { callback(error, data, res) })
}

module.exports = { fetchStories }

