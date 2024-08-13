import { generateRandomUsername } from "./generateRandomUser";

export const generateRandomEmail = () => {
  const domains = ["example.com", "test.com", "sample.com", "demo.com"];
  const username = generateRandomUsername(8);
  const domain = domains[Math.floor(Math.random() * domains.length)];

  return `${username}@${domain}`;
};
