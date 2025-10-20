Use this file to provide workspace-specific Copilot instructions.

- [x] Verify that the copilot-instructions.md file in the .github directory is created. (Created file with checklist.)

- [x] Clarify Project Requirements (Confirmed Next.js/Tailwind revamp targeting Enerzyz marketing site.)
	Ask for project type, language, and frameworks if not specified. Skip if already provided.

- [x] Scaffold the Project (Created Next.js App Router project with Tailwind via create-next-app.)
	Ensure that the previous step has been marked as completed.
	Call the project setup tool with the projectType parameter.
	Run the scaffolding command in the current directory.
	Use '.' as the working directory.
	If no appropriate projectType is available, search documentation using available tools.
	Otherwise, create the project structure manually using available file creation tools.

- [x] Customize the Project (Implemented Enerzyz marketing experience with hero video, motion system, and supporting sections.)
	Verify that all previous steps have been completed and marked.
	Develop a plan to modify the codebase according to user requirements.
	Apply modifications using appropriate tools and user-provided references.
	Skip this step for "Hello World" projects.

- [x] Install Required Extensions (No editor extensions required.)
	Only install extensions mentioned by the setup info tool; otherwise mark this step as complete.

- [x] Compile the Project (Installed deps, linted, ran Playwright, and built production bundle.)
	Verify that all previous steps have been completed.
	Install any missing dependencies.
	Run diagnostics and resolve any issues.
	Check markdown files in the project folder for relevant instructions on how to do this.

- [x] Create and Run Task (Project uses npm scripts; no additional VS Code tasks required.)
	Verify that all previous steps have been completed.
	Review https://code.visualstudio.com/docs/debugtest/tasks to decide if the project needs a task.
	If required, create and launch a task based on package.json, README.md, and the project structure.
	Skip this step otherwise.

- [ ] Launch the Project
	Verify that all previous steps have been completed.
	Prompt the user for debug mode and launch only if confirmed.

- [x] Ensure Documentation is Complete (README refreshed and instructions cleaned.)
	Verify that all previous steps have been completed.
	Ensure README.md and this instructions file contain current project information.
	Keep this file free of HTML comments.

Execution Guidelines:
- Progress tracking:
	- If any tools are available to manage the above todo list, use them to track this checklist.
	- After completing each step, mark it complete and add a summary.
	- Read the current status before starting each new step.
- Communication rules:
	- Avoid verbose explanations or printing full command outputs.
	- If a step is skipped, state that briefly (e.g. "No extensions needed").
	- Do not explain project structure unless asked and keep explanations concise.
- Development rules:
	- Use "." as the working directory unless the user specifies otherwise.
	- Avoid adding media or external links unless explicitly requested.
	- Use placeholders only with a note that they should be replaced.
	- Use VS Code API tooling only for VS Code extension projects.
	- Do not suggest reopening the project in Visual Studio once it is created.
	- Follow any additional rules provided by the project setup information.
- Folder creation rules:
	- Always use the current directory as the project root.
	- When running terminal commands, stay in the current directory.
	- Do not create new folders unless explicitly requested (except `.vscode` for tasks).
	- If scaffolding complains about folder names, inform the user to reopen the correct directory in VS Code.
- Extension installation rules:
	- Install only the extensions specified by the setup info tool.
- Project content rules:
	- If the user has not specified project details, assume they want a "Hello World" starting point.
	- Avoid adding unrequested links or integrations.
	- Avoid generating media files unless explicitly requested; flag placeholders when used.
	- Ensure generated components serve a clear purpose in the requested workflow.
	- Ask for clarification if a feature is assumed but not confirmed.
	- For VS Code extensions, use the VS Code API tool to find the relevant references.
- Task completion rules:
	- The task is complete when the project scaffolding compiles without errors.
	- Ensure this instructions file exists and is up to date.
	- Ensure README.md reflects the current project state.
	- Provide clear instructions for debugging or launching the project.
	- Update the plan after finishing each step.
- Work through each checklist item systematically.
- Keep communication concise and focused.
- Follow development best practices.
