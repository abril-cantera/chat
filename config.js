const config = {
  uri: process.env.DB_URL || 'mongodb://abril:mHPtQqf1QHOJnHNp@ac-ztbv5qu-shard-00-00.bk10qp4.mongodb.net:27017,ac-ztbv5qu-shard-00-01.bk10qp4.mongodb.net:27017,ac-ztbv5qu-shard-00-02.bk10qp4.mongodb.net:27017/?ssl=true&replicaSet=atlas-nmjlhz-shard-0&authSource=admin&retryWrites=true&w=majority',
  port: process.env.PORT || 5000,
  host: process.env.HOST || 'HTTP://LOCALHOST',
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  filesRoute: process.envFILES_ROUTE || 'files'
};

module.exports = config;