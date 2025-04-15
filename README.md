# YouTube Clone

This is a YouTube Clone built using **Vite + React**. The project fetches and displays YouTube videos using the YouTube Data API.

## Features

- Fast and optimized development with Vite
- Fetches videos from the YouTube API
- Displays video thumbnails, titles, and statistics
- Responsive UI

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/dibyasagar16/youtube-clone.git
   ```
2. Navigate to the project directory:
   ```sh
   cd youtube-clone
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Setting Up Environment Variables

1. Install `dotenv` (if not already installed):

   ```sh
   npm install dotenv
   ```

2. Create a `.env` file in the root directory and add your YouTube API key:

   ```sh
   VITE_YOUTUBE_API_KEY=your_api_key_here
   ```

   **Note:** No quotes should be used around the key.

3. Ensure your `.gitignore` file includes `.env` to prevent committing sensitive data:

   ```sh
   echo ".env" >> .gitignore
   ```

4. Centralize the API key usage by following these steps:

   - Create a `config.js` file inside the `src/utils` folder:
     ```js
     // src/utils/config.js
     export const api_key = import.meta.env.VITE_YOUTUBE_API_KEY;
     ```
   - Import the `API_KEY` in any component where you need to use it. For example:

     ```js
     import { api_key } from "../../Utils/Config";

     const videoLists_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&videoCategoryId=${category}&key=${api_key}`;
     ```

## Running the Project

Start the development server:

```sh
npm run dev
```

## Building for Production

To create a production build, run:

```sh
npm run build
```

## Deployment

You can deploy the build output using any static site hosting service like Netlify, Vercel, or GitHub Pages.

## Contributing

Feel free to fork this repository and make pull requests for any improvements.

## License

This project is licensed under the MIT License.
