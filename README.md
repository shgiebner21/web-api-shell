# Fun with Parker Bear and Charleston Parks Conservancy  

This is a web application to help connect children and families with Charleston's parks.

I built this application to highlight the technical skills learned at the JRS Code Bootcamp including;
  - Database technology; CouchDb is used here but we also learned mySQL
  - Functional Javascript including libraries like Ramda, Moment and Tachyons
  - Git and Github, CLI (iTerm), Text Editors (Atom), Node.js and NPM
  - React/Redux and a RESTful API
  
## Parker and Parks
## User Story: LogIn, Log user in (landing page)
  As a child I need to log into the app so that I can view list of parks I have visited in the past.  
  See (view park list) TODO (wireframe)

## User Story: View Park list Map
  As a child I would like to see all ten parks and whether or not I have visited them.

## User Story: View Park Details
  As a child I would like to view details and memories of a park I have visited, including
  What are the details and memories that will be shown? (List of images, tasks completed, etc)
    - Volunteer Tasks   (volunteer task item component includes: task name, completed: true/false, type image(nice to have) )
    - Learning events Tasks ("    "     ")
  Selecting a task from the list of volunteer tasks will take me to a volunteer task detail page.  See View Volunteer Task detail page user story.

## User Story: View Task detail page (volunteer)
  As a child I wish to view all the details about a volunteer task and optionally choose to fulfill or cancel.
  Fulfilling a task will do xxx.  Cancelling a task will return me to the View Park Details page.
  API: '/parks/:parkid/tasks/:taskid (specific park/task/:id)
  
 ## User Story: View Task detail page (Learning Event)
  ""    ""    ""




The project is divided into two directories, the api directory is the API Application and
the web directory is the React/Redux Application.

You can run both the API and WEB by doing the following

```
npm install
npm run web-install
npm run api-install
npm start
```

This should start the web app on 3000 and the api app on 5000


