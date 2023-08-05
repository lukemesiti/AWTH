# Running the app

- The following commands need to be run from the root directory of the project.
- Node.js and npm are required to run the commands. Installation instructions can be found [here](https://nodejs.org).

## Developer setup

- Run `npm install` to install the project dependencies.
- Run `npm run dev` to build the project and watch for changes. The locally accessible address will be displayed in the command terminal.

## Tests

- Run `npm test` to execute the tests.

## Production

- Run `npm run build` to create a production build. The build artifacts will be stored in the `dist/` directory.

# Decisions

- I used the Vite react typescript template as a base. I chose Vite for its speed and easy developer experience.
- Tests are written with Vitest, which uses the Vite config and simplifies setup.
- I used Tailwindcss for styling, allowing me to quickly and easily style components.
- I used React context to managed the modal state. This isn't a large application and prop drilling would not have been a excessive but I opted for context as a cleaner solution.
- I chose to not route the modals. Controlling the modals with react state allows for greater control of the UX.
- I created components for reusable elements using a BUI naming convention. BUI, refers to Broccoli UI.

# Assumptions

- Validation. The brief stated that the name input should be at least 3 characters. I decided to also put an upper limit of 100 characters on all inputs. I thought this was a realistic limit. In a real world situation I would discuss this with the relevant people in my team, either product/design and/or backend developer.
