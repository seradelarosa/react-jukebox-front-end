# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Minimum requirements
You have the power to decide how to implement the UI in this application. Depending on your chosen UI structure, the requirements will slightly differ. Below are the functionalities your application must support, with notes for both UI approaches and the new requirement for tracking the current track. Choose only one path!:

<table>
    <tr>
        <th>Feature</th>
        <th>Dashboard Requirements</th>
        <th>React Router Requirements</th>
        <th>Complete</th>
    <tr>
    <tr>
        <td>Read all tracks</td>
        <td>
            <ul>
                <li>Build a TrackList component.</li>
                <li>This component will be a child of the App component    and should always be visible.</li>
                </li> Display the details of every track in the database in this component. </li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Build a Home component.
The Home component will be a child of the App component and be shown on the / route.
Build a TrackList component.
The TrackList component will be a child of the Home component.
Display the details of every track in the database using the TrackList component.</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </td>
    </tr>
     <tr>
        <td>Create a new track	</td>
        <td>
            <ul>
                <li>- Build a TrackForm component.
- This component will be a child of the App component.
- It should only be visible when a user clicks an Add New Track button above the TrackList component inside the App component.
- This component will display a form allowing users to add a track.
- When the user submits the form, the track should be added to the database. They should also see the new track in the TrackList component, and the TrackForm component should be hidden.	</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </td>
        <td>
            <ul>
                <li>- Build a TrackForm component.
- This component will be a child of the App component and be shown on the /add-track route.
- The user should be able to navigate to this route by clicking an Add New Track button above the TrackList component inside the Home component.
- This component will display a form allowing users to add a track.
- When the user submits the form, the track should be added to the database, and they should automatically be redirected to the / route where they will see the new track.</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </td>
    </tr>
     <tr>
        <td>Update a track</td>
        <td>
            <ul>
                <li>- Add an Edit button under each track in the TrackList component to allow the user to select a track to edit. When the user selects a track to edit, the existing TrackFrom component should be shown.
- Refactor the TrackForm component so that it can also be used to edit an existing track.
- When the user submits the form to edit an existing track, it should be updated in the database. They should also see the updated track in the TrackList component, and the TrackForm component should be hidden.	</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </td>
        <td>
            <ul>
                <li>- Add a /edit-track/:trackId route, which will show the existing TrackForm component.
- Add an Edit button under each track in the TrackList component allowing a user to navigate to this route. Ensure that the unique id for a track is passed in the URL.
- Refactor the TrackForm component so that it can also be used to edit an existing track.
- When the user submits the form to edit an existing track, it should be updated in the database, and they should automatically be redirected to the / route where they will see the updated track.</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Delete a track</td>
        <td>
            <ul>
                <li>- In the TrackList component, add a Delete button under each track.
- When the user clicks this button, the corresponding track should be deleted from the database and should no longer be shown in the TrackList component.	
</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </td>
        <td>
            <ul>
                <li>- In the TrackList component, add a Delete button under each track.
- When the user clicks this button, the corresponding track should be deleted from the database and should no longer be shown in the TrackList component.</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Currently playing track	</td>
        <td>
            <ul>
                <li>
- Build a NowPlaying component.
- This component will be a child of the App component, placed after the TrackList component.
- In the TrackList component, add a Play button under each track.
- When a user clicks a Play button, display the details for the corresponding track as in the NowPlaying component.
- The NowPlaying component should not be visible if no track is playing.</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </td>
        <td>
            <ul>
                <li>- Build a NowPlaying component.
- This component will be a child of the Home component, placed after the TrackList component.
- In the TrackList component, add a Play button under each track.
- When a user clicks a Play button, display the details for the corresponding track as in the NowPlaying component.
- The NowPlaying component should not be visible if no track is playing.
⚠️ Please note that this lab does not involve actual audio playback capabilities. It is designed as a UI simulation of a jukebox, focusing on the interaction with a music track database. The features implemented will simulate managing a playlist but will not play music.</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </td>
    </tr>
	</table>



Component hierarchy
You can choose between maintaining a single-page flow with components that appear and disappear based on user actions or implementing routing to navigate between different components representing pages. Here is an example structure for each option:

Dashboard style
App
TrackList
TrackForm (conditionally rendered)
NowPlaying (conditionally rendered)
React Router style
App
Home (route: /)
TrackList
NowPlaying (conditionally rendered)
TrackForm (route: /add-track AND /edit-track/:trackId)
This lab offers you a chance to practice making design decisions based on user experience and functionality requirements. Whichever approach you choose, the key is ensuring the application remains user-friendly and performs full CRUD functionality paired with the Express API.