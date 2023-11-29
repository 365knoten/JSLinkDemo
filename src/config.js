
// The order of the fields in the form.... 
// the Fields will be displayed in that Order
// If you don't add all fields, the remaining fields will be reordered to to bottom
// You can leave this empty
export const FIELDORDER = [
    "TextColumn",
    "Title"
];

// These fields will be hidden on the form
// You can leave this empty if you don't want to hide any fields
export const HIDEFIELDS = [
    "TextColumn3"
];

// These fields will be renamed on the form
// You can leave this empty if you don't want to rename any fields
export const RENAMEFIELDS = {
    Title: "My renamed Title",
    TextColumn:"Workflow State"
}


// This is the default State for our "Workflow Button"
export const DEFAULTSTATE="Start";

// These are the States/Buttons that our workflow can transition between
// title: the text on the button
// visibleInState: Determines in which State the button should be visible
// nextState: the next state to transition to after the button as been clicked
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