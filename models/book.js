const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("../config");
// const endpoint = process.env.HOST;
// const key = process.env.AUTHKEY;
// const databaseId = process.env.DatabaseId;
// const containerId = process.env.ContainerId;
// const partitionKey = "/datatype";

const { endpoint, key, databaseId, containerId, partitionKey } = config;
const client = new CosmosClient({ endpoint, key });

async function getAllBooks() {
  const querySpec = {
    query: "SELECT * from c",
  };

  const { resources: result } = await client
    .database(databaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll();
  return result;
}

async function findBookById(id) {
  const { resource } = await client
    .database(databaseId)
    .container(containerId)
    .item(id, partitionKey)
    .read();
  return resource;
}

async function updateBook(updateItem) {
  const { resource } = await client
    .database(databaseId)
    .container(containerId)
    .item(updateItem.id, partitionKey)
    .replace(updateItem);
  return updateItem;
}

async function createBook(newbook) {
  const { resource } = await client
    .database(databaseId)
    .container(containerId)
    .items.create(newbook);
  return newbook;
}

async function deleteBook(id) {
  const { resource: book } = await client
    .database(databaseId)
    .container(containerId)
    .item(id, partitionKey)
    .delete();
  console.log(id);
  return id;
}

module.exports = {
  getAllBooks,
  findBookById,
  createBook,
  deleteBook,
  updateBook,
};
