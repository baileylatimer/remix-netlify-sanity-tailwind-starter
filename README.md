# Remix + Netlify + Sanity + Tailwind Starter Template

A ready-to-use starter template that combines Remix, Netlify, Sanity CMS, and Tailwind CSS for rapid web application development.

## Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [VS Code](https://code.visualstudio.com/) (recommended editor)
- [Git](https://git-scm.com/)

## COPY AND PASTE THIS INTO CLINE FOR STARTING PROMPT

```
I want to set up a new project using the Remix-Netlify-Sanity-Tailwind starter. I'll need help with:
1. Setting up the project and installing dependencies
2. Configuring Sanity with my project details
3. Setting up Git for version control
4. Deploying to Netlify
```


## EXAMPLE MESSAGE FOR CLINE ONCE YOU GET RUNNING
```
Ok create a new component called process that’s populated by sanity. It should have 3 cards that stack on mobile.

there should be an image upload field for the icons, an h2 (title), and p (description). 

there should be an hr in between the title and description.

the first card should have the colors inverted with the background as our primary color.

here’s the primary color if you want to create a variable #17283D.

see the mockup attached.
```


## Getting Started

### Clone the Repository

1. Open your terminal and run:

```sh
git clone https://github.com/your-username/remix-netlify-sanity-tailwind-starter.git my-project
cd my-project
```

2. Delete the existing Git repository and initialize a new one:

```sh
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```

3. Create a new repository on GitHub, then connect your local repository:

```sh
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### Install Dependencies

```sh
npm install
```

### Configure Environment Variables

1. Update the `.env` file with your Sanity project information:

```
SANITY_PROJECT_ID=YOUR_SANITY_PROJECT_ID
SANITY_DATASET=YOUR_SANITY_DATASET
```

You'll replace these values with those from your Sanity project in the next steps.

## Setting Up Sanity

### Create a New Sanity Project

1. Install the Sanity CLI globally:

```sh
npm install -g @sanity/cli
```

2. Create a new Sanity project:

```sh
sanity login
sanity init
```

3. During initialization:
   - Select "Create new project"
   - Enter a project name
   - Use the default dataset configuration
   - Choose "Clean project with no predefined schemas" as your template

4. After initialization, note your Project ID from the console output or find it in the Sanity management console at [https://www.sanity.io/manage](https://www.sanity.io/manage).

### Update Configuration Files

Update the following files with your Sanity Project ID and dataset name:

1. `.env`
2. `sanity-studio/sanity.config.ts`
3. `sanity-studio/sanity.cli.ts`
4. `studio/sanity.config.ts`
5. `studio/sanity.cli.ts`

Replace `YOUR_SANITY_PROJECT_ID` with your actual Sanity Project ID and `YOUR_SANITY_DATASET` with your dataset name (usually "production").

## Running Your Project

### Start Sanity Studio

Open a terminal and run:

```sh
cd sanity-studio
npm install
npm run dev
```

This will start Sanity Studio on [http://localhost:3333](http://localhost:3333)

### Start Remix Development Server

Open another terminal window and from the project root run:

```sh
npm run dev
```

This will start your Remix app on [http://localhost:3000](http://localhost:3000)

## VS Code Tips

1. Install recommended extensions:
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
   - ES7+ React/Redux/React-Native snippets

2. Use the integrated terminal in VS Code to run commands:
   - Open Terminal menu > New Terminal
   - Run commands directly in the terminal panel

3. Split terminals to run both Sanity and Remix servers simultaneously:
   - Click the Split Terminal button in the terminal panel
   - Run Sanity in one terminal and Remix in the other

## Deploying to Netlify

### Option 1: Deploy from Git

1. Push your code to GitHub, GitLab, or Bitbucket
2. Log in to [Netlify](https://www.netlify.com/)
3. Click "Add new site" > "Import an existing project"
4. Choose your Git provider and select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `public`
6. Click "Deploy site"
7. In site settings, add your environment variables:
   - SANITY_PROJECT_ID
   - SANITY_DATASET

### Option 2: Deploy using Netlify CLI

1. Install the Netlify CLI:

```sh
npm install -g netlify-cli
```

2. Log in to Netlify:

```sh
netlify login
```

3. Connect to your Netlify site:

```sh
netlify init
```

4. Deploy your site:

```sh
netlify deploy --build --prod
```

## Next Steps

1. Customize the content schemas in the `sanity-studio/schemas` directory
2. Modify the Remix routes in the `app/routes` directory
3. Customize the Tailwind configuration in `tailwind.config.js`
4. Update the site title and metadata in `app/routes/_index.tsx`

## Troubleshooting

- **Sanity Connection Issues**: Ensure your Project ID and dataset name are correct in all configuration files
- **Build Errors**: Check that all dependencies are installed with `npm install`
- **Deployment Issues**: Verify environment variables are correctly set in Netlify

## Resources

- [Remix Documentation](https://remix.run/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
