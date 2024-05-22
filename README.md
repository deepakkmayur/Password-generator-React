# Random Password Generator
# Vercel Link : https://password-generator-react-nine-livid.vercel.app/
## Description
This project is a random password generator built with React JS. It allows users to generate passwords with options to include numbers, letters, and special characters. Users can copy the generated password to the clipboard and view the last 5 generated passwords, which are stored in local storage.

## Assumptions
1. **Password Length**: The length of the generated password will be 8 characters.
2. **Character Sets**: The following sets are used for generating passwords:
   - Numbers
   - Letters
   - Symbols
3. **User Preferences**: Users can mark the inclusion of numbers, letters, and symbols. At least one option must be selected.
4. **Password History**: The last 5 generated passwords are stored in local storage and displayed to the user.
5. **Copy to Clipboard**: Clicking the "Copy" button copies the generated password to the clipboard and then button Copy will change to Copied.
6. **Local Storage**: Local storage is used to persist the last 5 passwords.
7. **Deployment**: The application is deployed on Vercel.

## Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

## Deployment
The application is deployed on Vercel and can be accessed at : https://password-generator-react-nine-livid.vercel.app/.

## Usage
- Select your preferences for including numbers, letters, and symbols.
- Click the "Generate Password" button to create a new password.
- Click the "Copy" button to copy the generated password to the clipboard.
- View the last 5 generated passwords below the generated password display.

