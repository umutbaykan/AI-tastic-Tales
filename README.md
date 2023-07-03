<p align="center">
<img src="/frontend/public/images/homepageLogo313.png" alt="AI-Tastic Tales" >
</p>
   
# **Table of Contents**

1. [Project Description](https://github.com/umutbaykan/AI-tastic-tales#project-description)
2. [Features](https://github.com/umutbaykan/AI-tastic-tales#features)
3. [Technologies](https://github.com/umutbaykan/AI-tastic-tales#technologies)
4. [How Does It Work](https://github.com/umutbaykan/AI-tastic-tales#how-does-it-work)
5. [Installation](https://github.com/umutbaykan/AI-tastic-tales#installation)
6. [Getting Started](https://github.com/umutbaykan/AI-tastic-tales#getting-started)
7. [TODO's](https://github.com/umutbaykan/AI-tastic-tales#todos)
8. [Authors](https://github.com/umutbaykan/AI-tastic-tales#authors)

------
------
## **1. Project Description**

AI-Tastic Tales is the culmination of a group project developed during the Makers Academy software development bootcamp. It is a full-stack web application that leverages the power of ChatGPT and Stable Diffusion to create captivating short stories. The app allows users to craft their own unique narratives, chapter by chapter, based on their prompts.

Each chapter of the story presents the user with engaging paragraphs of text and accompanying images that align with the story's context. Users actively shape the narrative by providing prompts, and the application dynamically generates new stories and images, creating a seamless and continuous story.

The project embraced Agile methodologies, employing daily standups and end-of-day retrospectives to cultivate a collaborative and communicative atmosphere within the team. By adhering to these practices, team members remained informed about the project's structure and advancements, enabling efficient progress. The development approach followed a step-by-step methodology, initially focusing on delivering a minimum viable product (MVP) and gradually expanding functionality block by block. Any obstacles encountered along the way were addressed as a team and resources reallocated accordingly to ensure smooth development.

Full video presentation made on the demo day can be found [here](https://youtu.be/65ZOm3kqkyo).

------
------
## **2. Features**

Click [here](https://youtu.be/65ZOm3kqkyo?t=87) for a run through video of the application.

- User Prompts: Users have the ability to provide creative inputs such as characters, settings, and themes to shape their story.
- Chapter Generation: The ChatGPT API generates story chapters by seamlessly incorporating user prompts and choices.
- API Integration: The Stable Diffusion API generates images based on the story prompts, providing visual context for each chapter.
- Iterative Storytelling: Users can actively participate in the storytelling process by providing feedback and ideas for each chapter. The subsequent generated chapters take their input into account.
- Export: Users can view the narrative they have experienced thus far and have the option to export it in different formats.

------
------

## **3. Technologies**

- <img src="https://simpleicons.org/icons/express.svg" width="12" height="12">  [Express](https://expressjs.com/)
- <img src="https://simpleicons.org/icons/react.svg" width="12" height="12">  [React](https://react.dev/)
- <img src="https://simpleicons.org/icons/nodedotjs.svg" width="12" height="12">  [Node](https://nodejs.org/en)

Additional technologies:

- <img src="https://simpleicons.org/icons/jest.svg" width="12" height="12">  [Jest](https://jestjs.io/)
- <img src="https://simpleicons.org/icons/cypress.svg" width="12" height="12">  [Cypress](https://www.cypress.io/)
- <img src="https://simpleicons.org/icons/nodemon.svg" width="12" height="12">  [Nodemon](https://www.npmjs.com/package/nodemon)

------
------
## **4. How Does It Work**

Below is a breakdown of the filing structure of the application:
```terminal
.
├── api
│   ├── bin               # Configuration files
│   ├── clients           # Methods for making API calls to GPT & SD clients
│   ├── controllers       # Controllers handling responses from API calls
│   ├── prompts           # Populating prompts from the frontend with additional helpers for better API results
│   ├── routes            # Handling backend routes to invoke the correct controllers
│   ├── spec              # Tests and specifications
│   └── app.js            # Main file executed during launch
│
└── frontend
    ├── cypress           # Frontend end-to-end tests and fixture data
    ├── public            # Image files and logos used in the application
    └── src
        ├── components    # Components used in the webpage
        └── app.js        # Main app file responsible for rendering the frontend
```

### Backend:
The backend server acts as an intermediary between the frontend and the GPT & SD clients. It receives information from the frontend and combines it with the prompt bank based on user choices. The server then sends simultaneous API calls to the clients. The prompt parameters greatly affect the quality of the generated image, so generating new prompts is necessary. The whole process of receiving prompts, populating them, sending them as part of API calls and passing on the results to frontend is referred to as a cycle.

Based on the user's choice on the frontend, a new cycle can be initiated. For example, if the user decides to steer the story, their new input updates the prompt parameters and triggers another API call. To maintain narrative continuity, the existing chapters are included in the API call to Chat GPT.

Each chapter is sent to the frontend for the user to view, and the data is not stored. Currently, there is no implemented database, but this could be added in the future to allow users to store and review their generated stories.

### Frontend:
The frontend enables users to configure the theme, style, characters, and context of the story. These configurations are sent as JSON to the backend to start the first cycle, and users can view the rendered image and chapters once cycle is completed.

At the end of each cycle, users have a few choices:
1) They can provide a different prompt to steer the story. In this case, the prompt configuration is updated and sent back to the backend along with the existing chapters to provide context.
2) Users can choose to determine what happens next and request Chat GPT to generate the subsequent chapter based on the existing context. This prompts a change in the prompt to solicit a new chapter from Chat GPT, utilizing the existing chapters as contextual information.
3) At any point, users can choose to refresh the story, in which case the API calls are made with the existing configurations to obtain different results.

Information received from the backend is stored in the local storage. At the end of each cycle, unless the user chooses to refresh the story, the new chapter and image link are added to the local storage. If users want to review the story they have read so far, they can navigate to the "story-so-far" section, where the component accesses the local storage information and renders a continuous narrative for the user to see.

------
------
## **5. Installation**

Before running the project, make sure you have npm and node installed on your local machine. Additionally, you'll need separate API keys for the GPT and SD clients to ensure the application functions properly on your machine.

To obtain the API keys, follow these steps:
1) OpenAI API key: You can obtain the OpenAI API key by visiting the [OpenAI API Keys](https://platform.openai.com/account/api-keys) page. Export this key as `GPT_KEY` in your environment variables.
2) Stable Diffusion API key: Obtain the Stable Diffusion API key from the [Stable Diffusion API](https://stablediffusionapi.com/) website. Export this key as `SD_KEY` in your environment variables.

Make sure to export the keys using the correct environment variable names mentioned above. Once you have the necessary API keys and have exported them as environment variables, you can proceed with running the project.

To get started, clone the repository:

    ```bash
    git clone https://github.com/AI-tistic-Tales/AI-tistic-Tales.git
    ```

Then, navigate to the api directory and install the required npm packages:

    ```bash
    cd api
    npm install

Next, navigate to the frontend directory and install the necessary npm packages:

    cd ../frontend
    npm install
    ```

To run the tests, you can use the following commands:

    ```bash
    # api
    npm run test
    ```

    ```bash
    # frontend
    npm run test

    # Alternatively, if you want to test through the browser
    npm run test:open
    # This wil open a new browser where you can run each test individually.
    
------
------
## **6. Getting Started**

Once the repository is cloned and the dependencies have been installed, you can run the program.

1. Start the backend server by running the following command:

    ```
    cd api
    npm start
    ```
2. Once the backend server is up and running, open a new terminal window and navigate to the frontend directory.

    ```
    cd ../frontend
    npm start
    ```
    
After both the backend and frontend servers have started successfully, you can access the application locally by opening your web browser and entering the following URL: http://localhost:3000
You should now be able to interact with the application on your local machine.

------
------
## **7. TODO's**
- Allow users to describe their own characters: Consider implementing a feature that allows users to provide their own character descriptions instead of relying solely on popular fictional characters. This could provide more flexibility and personalization for users, although it may require using different image generation models/APIs to ensure consistent character representations across different images.

- Implement a database for saving and viewing stories: Set up a database to enable users to save their generated stories and view them later. This would enhance the user experience and allow for easy access to previously generated content.

- Implement a voting system and popular stories section: Create a feature that allows users to vote on stories and display the most popular ones. This can add a social aspect to the application and encourage engagement among users.

- Separate refresh option for chapters and images: Provide the ability for users to refresh the chapter and image separately. This would give users more control over the storytelling process and allow them to explore different possibilities for each element.

- Optimize the prompt bank: Analyze the prompt bank to identify opportunities for reducing code repetition across different characters. Consider consolidating common prompts that can be shared among multiple characters, improving efficiency and maintainability.

- Order prompts based on importance: Experiment with ordering the prompts based on their importance. Initial results have shown that better images can be achieved by prioritizing certain prompts. Adjusting the prompt order can potentially enhance the overall quality of the generated content.

------
------
## **8. Authors**

Each valued member of AI-Tastic Tales that contributed to this project:

<img src="https://avatars.githubusercontent.com/u/63741021?v=4" width="30" height="30"> [Jon Pillay](https://github.com/jonpillay)
<img src="https://avatars.githubusercontent.com/u/10515623?v=4" width="30" height="30"> [Natasha Buckham](https://github.com/natashabuckham)
<img src="https://avatars.githubusercontent.com/u/114309741?v=4" width="30" height="30"> [Sidra Iqbal](https://github.com/siqbal181)
<img src="https://ca.slack-edge.com/T03ALA7H4-U04NVL8MM3Q-1efd84dcd610-512" width="30" height="30"> [Chris Toplisek](https://github.com/toppy007)
<img src="https://avatars.githubusercontent.com/u/121251204?v=4" width="30" height="30"> [Umut Baykan](https://github.com/umutbaykan)
<img src="https://avatars.githubusercontent.com/u/124444624?v=4" width="30" height="30"> [Daniel John](https://github.com/djohn06)

Honarable Mention:

<img src="https://avatars.githubusercontent.com/u/32678879?v=4" width="30" height="30"> [Sunaina Rishi](https://github.com/SunainaR)

*For the original idea that eventually sprouted into AI-Tastic Tales!*
