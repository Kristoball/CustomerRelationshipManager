# CustomerRelationshipManager
  Creating a project for customer management where i want to create a login screen for the users. 
  My users should be able to create and update cusomers, and for each cusomer be able to create logs. 
  The logs should be able to be download as a pdf by the click of a button.

# Table of content
  01. [UseCase](./README.md/#usecase)
  01. [Technologies](./README.md/#technologies)
      - [Front-end](./README.md/#front-end)
      - [Back-end](./README.md/#back-end)
      - [DB](./README.md/#db)
  01. [Important Links](./README.md/#important-links)

# UseCase
  User shuold
  01. be able to log in to system.
  02. be able to see existing customers.
  03. be able to edit existing customers.
  03. be able to find contact info and other relevant info stored about the customers.
  04. be able to create new customers.
  05. be able to create a new customer log, in which should have a nice and intuitive editor interface.
  06. be able to save the customer log, and update it later.
  07. be able to download a specific customer log.
  
# Technologies:
  ## Front-end
  User interface will be created with react. The editor for the logs will use "editor js".
  Cookies will be used to store session tokens.
    
  ## Back-end
  See `html to pdf` under [Important Links](./README.md/#important-links) which does the conversion for me so i dont have to set up puppeteer

  ## DB
  Will be using mongo db, since the content from the text enditor already is in json format.
    
    
# Important links
  Imporant links for research
  01. https://medium.com/javascript-in-plain-english/generate-best-quality-pdf-of-any-webpage-html-page-in-nodejs-7b1223e1a3ac
  02. [Editor js](https://editorjs.io/)
  03. [Create pdf from Puppeteer](https://blog.risingstack.com/pdf-from-html-node-js-puppeteer/#option2)
  04. [html to pdf](https://www.npmjs.com/package/convert-html-to-pdf) 
