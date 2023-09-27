# CAPITAL PLACEMENT TASK 2

This is the first task (Task 2) of the interview assessment assigned to me by captial placement for the role of a frontend developer. The project was developed using the following tools:

- React Js
- Typescript
- SCSS
- Material UI
- Docker

## HOW TO USE

- **Run the project directly on your system**:

  > To run this project directly on your system you will need [**Node.Js**](https://nodejs.org/en/download) version **16.15.0** or higher

  - Run `git clone https://github.com/onukwilip/capital-placement-task-2.git`
  - Run `npm i -f` (To install all dependencies)
  - Run `npm run build` (To create the production build)
  - Run `npm i -g serve` (Install the library responsible for serving the production build)
  - Run `npx serve -s build` (Serve the application on http://localhost:3000)

- **Run the project using Docker**:

  > To run this project as a container you will need [**Docker**](https://www.docker.com/products/docker-desktop/)

  - Run `git clone https://github.com/onukwilip/capital-placement-task-2.git`
  - Run `docker build -t cp-task-2 .`
  - Run `docker run -p 3000:3000 -rm -it cp-task-2`
