import { FIRST_NAME, LAST_NAME } from "../astro.config.mjs"

export const FULL_NAME = `${FIRST_NAME} ${LAST_NAME}`
export const SITE_DESCRIPTION = `Welcome to ${FIRST_NAME}'s website!`

export const BRIEF_INTRO = {
  hello: `Hello! I'm ${FIRST_NAME}, a Software Engineer based in Tokyo`,
  overview: {
    content:
      'I have been programming for 10+ years. 2 years of professional experience in Brazil and 3+ years in Japan. I have experience working in digital innovation, automotive and banking / fintech industries. With my positive mindset, strong communication and engineering skills, I am an excellent candidate to help you solve your IT solution problems.',
    bonus:
      'In the following sections I share a bit of my experience in the various industries that I worked in.'
  },
  kss: {
    title: 'Software Consulting',
    content:
      'With the goal of going beyond my software engineering skills by getting closer to the customer as well as diversifying my portfolio I decided to venture into the world of consulting. In a bit over 6 months I was able to work with clients from various industries and develop software solutions using technologies that were far beyond what I had used so far in my career. I also got the opportunity to work in a completely Japanese speaking environment which has improved my technical Japanese very quickly. '
  },
  moneytree: {
    title: 'Banking & Fintech',
    content:
      "I've worked in the banking / fintech industry for 3+ years, working on Financial Data Modeling, Scraping & Aggregation and Bank API Integration. These systems would ingest very large amounts of financial data and it was my responsibility to ensure these systems were reliable as a Data Reliability Engineer. I worked with various internal and external stakeholders such as Customer Support Teams, Back-End Team and Financial Institutions and Data Providers (NTT Data BizSol & Parasol, SMBC, Yucho, MUFG, Kyash, etc.) to be able to understand problems, design solutions and implement needed changes in the aggregation pipeline."
  },
  automotive: {
    title: 'Automotive',
    content:
      "I've worked in the automotive industry for about 2 years. At first I built the back-end for a car battery delivery service for one of the biggest car battery companies in Brazil (Moura). After that I developed chatbot experiences, using Facebook, IBM Watson & Twitter, and maintained data lake pipelines for a renowned automotive company “Fiat Chrysler Automobiles”. I also worked at Mitsubishi Fuso, where I built dashboards which pulled data from multiple data sources to manage after sales parts pricing."
  },
  verball: {
    title: 'Voice Application',
    content:
      "I've freelanced as a developer for a voice application startup where I developed voice applications using Amazon Alexa Skills and Google Assistant APIs. Through direct communication with the founders I rapidly iterated on features to validate if the voice application could solve the customer’s problems in the early phases of the project."
  },
  voxar: {
    title: 'Augmented Reality',
    content:
      'I worked as a researcher for a Brazilian augmented reality research lab called Voxar Labs. There I developed mobile applications (Android) that used augmented reality and authored 1 paper and co-authored 3 others. I got the chance to travel around Brazil to attend symposiums and present my research to the community and run workshops.'
  },
  rv: {
    title: 'Web Development',
    content:
      'Developed the website for an RV Rental company based in Japan setting up an automated booking system using wix and bookingmood.'
  }
}
