# WebClient

This web client for BloomIQ is a simple and efficient application built with Next.js, Tailwind CSS, and Shadcn-UI to provide a seamless user experience.

## Getting Started

### Install Dependencies

Before getting started, ensure you have Node.js installed. Then, install the required dependencies:

```bash
npm install
# or
yarn
```

### Run WebClient Development Server: 

Launch the development server to preview and test the web client:

```bash
npm run dev
# or
yarn dev
```

### Set Up the Backend Server

You can set-up the backend server in two ways:

1. run the server locally by following the instructions in the [Manual Server Setup Documentation](https://ai-res-server.vercel.app/installation.html#manually).

2. run the server using the docker image by following the instructions in the [Docker Installation Documentation](https://ai-res-server.vercel.app/installation.html#docker).

## Check API Documentation / demo calls:

You can check the [API Documentation](https://ai-res-server.vercel.app/api.html) to see the available endpoints and their usage.

## TODO

- [ ] Progress bar on courses user have enrolled in { Implement in server too}
- [ ] Filter, search feature on `/learn`
- [ ] Implement user dashboard page to update their details api endpoint: `/dashboard?editprofile=true`
- [ ] Improve UI
- [ ] Add more [features](Feature to add)

## Feature to add

- [ ] Add a feature to add a course to the user's wishlist
- [ ] Add a feature to recommend courses to the user based on their interests
- [ ] Add a feature to track the user's progress in a course


## Learn More

Explore the features and capabilities of Next.js by referring to the [Next.js Documentation](https://nextjs.org/docs). Additionally, delve into the extensive UI components provided by ShadCn-UI through their [Documentation](https://ui.shadcn.com/) for a deeper understanding.