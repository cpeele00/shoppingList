# How to run this sample app "Shopping List"

### `yarn start`

This bad boy will install all of the npm packages for both the challenge-ui app and the challenge-api app and also this outer project as well.

It will also run the setup for Prisma (ORM for NodeJs) which will generate a Sqlite db and run some migrations.

Finally it will start both the Api server and the Client UI for you.

I've verified that this installs and runs fine on both Windows and MacOS environments. I have not tested it with Linux.

## Please Note

I wanted to include more in the sample project but unfortunately time was limited. A couple of the things that I didn't get to were: "Form validation" and "refactoring the Graphql TypeDefs and Resolvers into their own respective files for maintainabilty". Maybe later...

This is not a full fledge Full-stack demo app. It's primarily meant to be a Front-end demo app. I did however throw together a quick Node Express backend with Apollo-Server GraphQL and Prisma ORM. The backend is not meant to be an example for best practices or for production quality.

### React Patterns and Practices

- Feature based organization
- Redux-ducks pattern
- Render Props pattern
- Composite component pattern
- Redux Container / Presentational component pattern

### Technologies Used

- React
- React Router
- Redux (with Dev tools enabled)
- Redux-Saga
- TypeScript
- React Hook Form
- Emotion CSS
- Material-UI
- NodeJS
- GraphQL (Apollo Server)
- Prisma ORM
- Prettier
- ESlint
