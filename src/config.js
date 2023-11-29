export const FIELDORDER = [
    "TextColumn",
    "Title"
];

export const HIDEFIELDS = [
    "TextColumn3"
];

export const RENAMEFIELDS = {
    Title: "My renamed Title",
    TextColumn:"Workflow State"
}



export const DEFAULTSTATE="Start";

export const STATES = [
    {
        title: "Start Workflow",
        visibleInState: "Start",
        nextState: "WorkflowStarted"
    },

    {
        title: "Mark as completed",
        visibleInState: "WorkflowStarted",
        nextState: "Completed"
    },

    {
        title: "Abort",
        visibleInState: "WorkflowStarted",
        nextState: "Aborted"
    },
    {
        title: "Re-submit",
        visibleInState: "Aborted",
        nextState: "WorkflowStarted"
    },
    {
        title: "Re-open",
        visibleInState: "Completed",
        nextState: "WorkflowStarted"
    },


]