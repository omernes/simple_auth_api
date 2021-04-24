module.exports = {
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/simple_auth",
    PORT: process.env.PORT || 8080,
    TOKEN_SECRET: process.env.TOKEN_SECRET || "this-is-a-very-long-and-complicated-secret-that's-actually-in-the-env-variables",
    TOKEN_EXPIRES_IN: process.env.TOKEN_EXPIRES_IN || "3600s",
    LANDING_PAGE_URL: process.env.LANDING_PAGE_URL || "http://www.google.com"
};
