import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request } from 'express';
// import globalErrorHandler from "./app/middlewares/globalErrorhandler";
// import notFound from "./app/middlewares/notFound";
// import router from "./app/routes";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// application routes
// app.use("/api", router);

app.get('/', (req: Request, res) => {
  // res.send('Hello From The Other World!');
  res.send(`
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>GamePlan - Backend Overview</title>
      <style>
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }

          body {
              font-family: 'Helvetica Neue', Arial, sans-serif;
              background-color: #f5f5f5;
              display: flex;
              flex-direction: column;
              min-height: 100vh;
              color: #333;
          }

          .container {
              flex: 1;
              width: 90%;
              max-width: 1000px;
              margin: 40px auto;
          }

          h1 {
              font-size: 2.5rem;
              color: #0d2040;
              text-align: center;
              margin-bottom: 20px;
          }

          .overview, .section {
              margin-bottom: 40px;
          }

          p, ul {
              font-size: 1rem;
              line-height: 1.7;
              color: #555;
          }

          ul {
              list-style: none;
          }

          ul li {
              position: relative;
              margin-bottom: 10px;
          }

          ul li::before {
              content: '•';
              color: #1a73e8;
              font-weight: bold;
              margin-right: 10px;
              font-size: 1.2rem;
          }

          a {
              color: #1a73e8;
              text-decoration: none;
          }

          a:hover {
              text-decoration: underline;
          }

          footer {
              background-color: #bfdbff;
              color: white;
              text-align: center;
              padding: 20px 0;
              margin-top: auto;
              font-size: 0.9rem;
          }

          footer p {
              margin-bottom: 5px;
          }

          footer a {
              color: black;
              font-weight: bold;
          }
      </style>
  </head>
  <body>

      <div class="container">
          <h1>Welcome to the Spotlight Backend!</h1>

          <div class="overview">
    <p>
        <strong>Spotlight</strong> is a booking platform connecting artists, pub owners, and customers. This app allows artists to book slots at pubs for performances and lets customers discover and book upcoming shows. The backend provides APIs to manage bookings, user data, reviews, and venue availability.
    </p>
</div>

<div class="section">
    <h2>Backend Details</h2>
    <ul>
        <li><strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, Mongoose, TypeScript</li>
        <li><strong>Frontend:</strong> React, Redux, Tailwind CSS, React Hook Form, GSAP (managed separately)</li>
        <li><strong>Deployment:</strong> Vercel for frontend, backend hosted here</li>
        <li><strong>API Routes:</strong> Manage users, bookings, reviews, artist and pub profiles via REST APIs.</li>
    </ul>
</div>

<div class="section">
    <h2>Key Features</h2>
    <ul>
        <li>User Registration and Role-Based Login (Admin, Artist, Pub Owner, Customer)</li>
        <li>Artist and Pub Booking System</li>
        <li>Search and Browse for Upcoming Events</li>
        <li>Review and Rating System for Artists and Pubs</li>
        <li>Profile Management with Role-Based Dashboards</li>
    </ul>
</div>

          <div class="section">
              <h2>Developer Information</h2>
              <p>
                  This backend is built and maintained by a team of dedicated developers. For more details, contributions, or to report issues, visit our GitHub repository.
              </p>
              <p><a href="https://github.com/saifmaamun/spotlight">View on GitHub</a></p>
          </div>
      </div>

      <footer>
          <p>© 2024 Spotlight Backend | Powered by Node.js & MongoDB</p>
          <p><a href="https://github.com/saifmaamun">GitHub Repository</a></p>
      </footer>

  </body>
  </html>

                  `);
});

// app.use(globalErrorHandler);

//Not Found
// app.use(notFound);

export default app;
