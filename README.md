# Tintash Games

## Description

_Tintash Games_ is a landing page and informational website for a software company called Tintash. The project involves implementing a UI based on a Figma design and includes a "Contact Us" form that stores data in MongoDB and files in AWS S3.

## Installation

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine.

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/alihassant/tintash-task.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tintash-games
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Environment Variables

###### (Optional, but only if you wish to use the Contact Us form.)

To connect to your MongoDB instance and set up the form, you will need to create a `.env.local` file in the root of your project and include the following variables:

```
NEXT_AWS_S3_REGION=
NEXT_AWS_S3_ACCESS_KEY_ID=
NEXT_AWS_S3_SECRET_ACCESS_KEY=
NEXT_AWS_S3_BUCKET_NAME=
MONGO_URI=
```

Make sure to fill in these values with your actual credentials.

## Usage

To run the project locally, use the following command:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to view the landing page. The page functions as a static portfolio, providing information about the company.

## Key Features

- **Navbar**: Easy navigation across sections.
- **Hero Section**: Engaging introduction to Tintash.
- **Featured Games**: Showcases key games developed by the company.
- **About Us**: Background information on the company.
- **Why Us**: Reasons for choosing Tintash.
- **Services**: Details of services offered.
- **LiveOps Case Study**: Showcases case studies related to live operations.
- **Projects**: Displays examples of past projects.
- **Testimonials**: Feedback from clients or partners.
- **Contact Us**: A form allowing users to reach out, with data stored in MongoDB.
- **Footer**: Additional links and company information.

## Technologies Used

- Next.js 15
- MongoDB
- Tailwind CSS
- Vercel
- GitHub

## Challenges and Solutions

The main challenges faced were adjusting images and positioning elements. Adjusting elements on top of each other was particularly difficult due to lack of prior experience in layout management.

## Future Improvements

Currently, there are no additional features planned as the project meets its requirements.

## Author

- **Name**: Ali Hassan
- **Email**: [aleehassant@gmail.com](mailto:aleehassant@gmail.com)
- **GitHub**: [alihassant](https://github.com/alihassant)
- **Website**: [www.ahassant.me](http://www.ahassant.me)
