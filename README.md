## RELISH

## In development
Exaclidraw url : [excalidraw](https://excalidraw.com/#room=1fa0bff986cbd94799e3,SsZaZ9CX_knbU5FzYNao5w)
Figma url: [figma](https://www.figma.com/design/OeNU8VpmkWCDT1HLSCamAs/Untitled?node-id=18-29&node-type=frame&t=BY9bu5YmDwd0IMcP-0)

## INSTRUCTIONS

Steps to follow for development / Setting up

1. Clone the repo
`git clone https://github.com/AaryanNarayani/Relish.git`

2. Install dependencies

	-- Server Side 
		`cd server`
		`npm install`
		`npx tsc -b`

	-- Set up Environment Variables
	  Create a .env file `touch .env`
	 Copy the .env.example File and add the database_url 	
	
	-- Client Side
		`cd client`
		`npm install`
		
3. Run Client and Server
	- Server  `node dist/index.js`
	- Client   `npm run dev`

4. Features/Contributions via Pull request

	Make sure you are on the main branch
	`git checkout -b {feature branch name}`

	Make the changes/ Add the feature
	
	`git add .`
	`git commit -m "{short feature desc}"`
	`git push origin {feature branch name}`

	Go the Pull Requests Section on Github and create a PR


