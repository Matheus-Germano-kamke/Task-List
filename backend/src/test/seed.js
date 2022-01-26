const server = require("../db/server");

const { users, posts } = require("./fixtures");

const services = require("../services");

async function seed() {
  const mongoose = await server();

  const collectionsNames = await getCollections(mongoose);

  await clearCollection(mongoose, collectionsNames);

  const [user] = await services.users.creat(users);

  const { _id: userId } = user;

  const a = await services.posts.creat(posts(userId));
  console.log(a);
  await services.posts.creat(posts(userId));
  await services.posts.creat(posts(userId));
  await services.posts.creat(posts(userId));
  await services.posts.creat(posts(userId));

  mongoose.connection.close();
}

async function getCollections(mongoose) {
  return new Promise((resolve) => {
    mongoose.connection.db.listCollections().toArray(function (err, names) {
      return resolve(names);
    });
  }).catch(function (err) {
    console.log(err);
  });
}

async function clearCollection(mongoose, collectionsNames) {
  if (collectionsNames) {
    for (const { name } of collectionsNames) {
      await mongoose.connection.collection(name).drop();
    }
  }
}

seed();
