const config = {
  //<Your Azure Cosmos account URI>
  endpoint: "https://pdcosmosdbaccount.documents.azure.com:443/",
  //<Your Azure Cosmos account key>
  key:
    "r0IMclbWF7oQB6x4m7zyixuu82gQ9vF6yTydxP1iViSAduvZglebEHuwHuYYUxT5xeEV1igCneqiCboCBH1ykg==",
  databaseId: "pdiotdb",
  containerId: "test",
  // partitionKey: { kind: "Hash", paths: ["/datatype"] },
  partitionKey: "books",
};

module.exports = config;
