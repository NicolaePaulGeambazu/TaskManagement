## Project
This project will be an task management applciation what will give user a easy management of task and will make it clear to see in wich status will be each task

## Available Scripts

### `npm i`

### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Project core functionality
    Task Creation: Users can add new tasks by providing a title, description, and selecting a status.
    Data Validation: The task creation form ensures that essential information such as title, description, and status is provided. Empty values or unselected status are flagged as errors.
    Task Editing: Users can easily modify task details, including the title, description, or status, by clicking the edit (pencil) icon.
    Task Deletion:Unwanted tasks can be deleted effortlessly by clicking the delete (bin) icon.
    Status Completion:Users can move tasks from their current status column to the 'Completed; column by clicking the appropriate icon.
    Log Off: While authentication isn't implemented, a log-off button is available to clear localStorage, providing users with control over data retention.
### Technology Stack
    State Management:Redux is employed for efficient state management.
    Data Persistence:Task data is stored in localStorage to prevent data loss on page refresh.

