## Standard Notes Calendar Plugin

A calendar plugin for Standard Notes that enables you to manage events directly within the app. This plugin is built using React and FullCalendar, offering functionality similar to popular calendar apps like Outlook or Apple Calendar.

Features
	•	View events in month, week, or day format.
	•	Add events by clicking on a date.
	•	Edit events by clicking on an existing event.
	•	Drag-and-drop events to reschedule them.
	•	Fully integrated with Standard Notes.
	•	Persistent storage using local storage (with potential to integrate with Standard Notes API).

Installation
	1.	Clone this repository:

git clone https://github.com/tej/standardnotes-calendar-plugin.git
cd standardnotes-calendar-plugin


	2.	Install dependencies:

npm install


	3.	Build the project:

npm run build


	4.	Serve the project locally:

npx http-server dist -p 8001 --cors


	5.	Create an ext.json file with the following content:

{
  "identifier": "com.username.calendar-plugin",
  "name": "Calendar Plugin",
  "content_type": "SN|Component",
  "area": "editor-editor",
  "version": "1.0.0",
  "url": "http://localhost:8001/index.html"
}


	6.	Open Standard Notes and go to Extensions → Import Extension.
Paste the URL of your ext.json file (e.g., http://localhost:8001/ext.json) and click Install.
	7.	Activate the extension and enjoy your calendar!

Usage
	•	Add an Event: Click on a date to create a new event.
	•	Edit an Event: Click on an existing event to rename it.
	•	Move an Event: Drag and drop an event to a new date/time.

Development

To start a development server with live reloading:

npm run dev

To watch for changes and rebuild the project:

npm run watch

Dependencies
	•	React
	•	FullCalendar
	•	Vite

Future Enhancements
	•	Integration with external calendars (Google, Outlook, Apple).
	•	Sync events using the Standard Notes API.
	•	Add recurring events functionality.
	•	Improve UI with customizable themes.

License

This project is licensed under the MIT License.