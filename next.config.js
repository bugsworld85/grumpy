module.exports = {
    reactStrictMode: true,
    // Will be available on both server and client
    env: {
        CAT_API_URL: process.env.CAT_API_URL,
        CAT_API_KEY: process.env.CAT_API_KEY,
    },
};
