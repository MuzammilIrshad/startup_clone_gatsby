module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-material-ui`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `7sf4ubupwnnr`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: `${{secrets.CMS_KEY}}`,
            },
        },
    ],
}
