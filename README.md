# moviexyz

## What and why

moviexyz is a website I built for people who have trouble choosing a movie to watch. My motivation for building this was to apply and improve my skills as a front-end developer and break out of tutorial hell by building something on my own, from start to finish.

**Check out the [Live Website](https://moviexyz.vercel.app/)**

## How it works

### Picking a random movie

The `Layout.tsx` component uses SWR to randomly fetch movies from the TMDb API. It does this by making a call to the `api/randomId` endpoint on the client-side. If the user selected any movie genres, the selected genre ID list is passed as a parameter to the endpoint.

The `getRandomMovieId` utility function is called within the endpoint, which takes the genre ID list from the query parameters and returns a random movie ID. The returned movie ID is then used as the button href within a Link component to navigate the user to the fetched movie's page.

When the button is clicked, the `handleClick` function is called, which updates the loading state and uses the `mutate` method from the `useSWR` hook to update the current random ID.

### Rendering the dynamic movie page

The movie page is rendered on the server-side mainly because I wanted to use the movie data to generate dynamic Open Graph (OG) images using `@vercel/og`.

The page uses `getServerSideProps` to fetch the movie data on the server-side by calling `getMovieDetails`, passing the dynamic query ID as an argument, and returning the movie data as props to the `MoviePage` component.

The `MoviePage` component then uses the movie data in the `Seo` and `MovieCard` components. The `ogContent` property of the `Seo` component is used to generate a dynamic URL that points to a serverless function that generates an OG image for the movie. This is achieved using the `@vercel/og` library, which generates OG images based on the content of a given URL.

### Handling genre selection

The `useGenresState` hook manages the genre state using Zustand to create a store that persists the genre ID list data in local storage.

The `GenresToggle.tsx` component renders a toggle group by mapping through an array of objects that contain the genre name and its respective ID, specified in the TMDb API docs. The `handleValueChange` function is passed to the `onValueChange` property of the toggle group, which calls the `setGenreIdList` method from the custom hook to update the genre ID list state.

In `utils/tmdb.ts`, there are two utility functions for fetching movie data using `moviedb-promise` to interact with the TMDb API.

The `getRandomMovieId` function takes a parsed `genresId` string as an argument, generates a random number between 1 and 500 to use as the random page, passes the pages and genres as options to the `discoverMovie` method, filters the page result movies to get movies with the required fields, and then returns a random movie ID based on the length of the filtered array.

The `getMovieDetails` function takes a movie ID as an argument, calls the `movieInfo` method passing the ID and the `append_to_response` option with videos and recommendations, and extends the return type to include those. The returned values are parsed to ensure fallback values, correct recommendation array size, and required fields.

### Other stuff

There's a toggle that allows the user to choose the letter case of the website to either normal, capitalized text or all lowercase text. This is also handled using zustand and local storage, definetely unnecessary feature that took me way too long to build.

Other than the dynamic og image for movie pages, there's also a default-card, which is not dynamic. Both cards were styled using tailwind, you can see the code in `src/pages/api/og/`.

## Built with

### Main

- [Next.js](https://nextjs.org)
- [Typescript](https://www.typescriptlang.org)
- [TailwindCSS](https://tailwindcss.com/docs)

### UI

- [Radix Primitives](https://www.radix-ui.com)
- [Radix Colors](https://www.radix-ui.com/colors)
- [Framer Motion](https://www.framer.com/motion)
- [Tabler Icons](https://tabler-icons.io)

### Plugins

- [windy-radix-palette](https://github.com/brattonross/windy-radix-palette)
- [tailwindcss-radix](https://github.com/ecklf/tailwindcss-radix)
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)

### Data Fetching and State

- [TMDb API](https://developers.themoviedb.org/3/getting-started/introduction)
- [moviedb-promise](https://github.com/grantholle/moviedb-promise)
- [SWR](https://swr.vercel.app)
- [Zustand](https://zustand-demo.pmnd.rs/)

### Utilities and Others

- [next-themes](https://github.com/pacocoursey/next-themes)
- [clsx](https://github.com/lukeed/clsx)
- [next-seo](https://github.com/garmeeh/next-seo)
- [prettier](https://prettier.io)
- [eslint](https://eslint.org)
- [@vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)

The project was bootstrapped with [create-t3-app](https://create.t3.gg/).

**Final Thoughts**

Most of the stuff I've used to build this website was new to me, so I had to learn it and figure out how to apply to my use case, therefore, I had a bit of a steep learning curve there, and this took some time. I feel like this could probably have been achieved in simpler, more performant ways, but for what it's worth, I did learned a lot of stuff building this and had a lot of fun figuring things out and getting everything to work the way I wanted it to.

I'm always looking for ways to improve my skills and learn new things, so if you have any feedback or suggestions, I'd love to hear them! Thanks for checking out the project - I hope you enjoyed it as much as I enjoyed building it.
