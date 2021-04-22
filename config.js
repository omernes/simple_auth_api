module.exports = {
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/simple_auth",
    PORT: process.env.PORT || 8080,
    TOKEN_SECRET: "this-is-a-very-long-and-complicated-secret-that's-actually-in-the-env-variables"
};
