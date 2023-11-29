import { FIELDORDER, HIDEFIELDS, RENAMEFIELDS,STATES,DEFAULTSTATE } from "./config"
import {OrderFormFields} from "./lib/OrderFormFields"
import {JSLinkContext} from "./lib/JSLinkContext"
import {StateButtons} from "./lib/StateButtons"

// Setup context
// This configures and holds the state of the form
const jsContext = new JSLinkContext();


// Configure Workflow Buttons
// Use this class to add workflow buttons to the top of the form
// You can configure the buttons manually, but this sample takes the configuration from the config.js file
const workflowButtons=new StateButtons();
workflowButtons.defaultValue(DEFAULTSTATE);
workflowButtons.addButtons(STATES);


// Define Functions to be executed after the form has been rendered
// topmountElement is a dom Element at the top of the form... You can put out own html there
jsContext.afterRender((ctx,topMountElement)=>{    
    // Re-Order the Form
    OrderFormFields(FIELDORDER, HIDEFIELDS, RENAMEFIELDS);    
    // Render our Buttons in the top Mount Element
    workflowButtons.render(topMountElement);    
})



// Setup Context Overrides
// Set onPostRender to JSContext (so that JSContext knows that the form has been rendered)
// Override the rendering for our column "TextColumn"
const tplctx = {
    OnPostRender: (ctx) => {  jsContext.onPostRenderTemplate(ctx);  },
    Templates: {
        Fields:{
            'TextColumn': {
                'NewForm': workflowButtons.overrideRendering(),
                'EditForm': workflowButtons.overrideRendering(),
              },
        }
    }
};



// Register Overrides with SharePoint
SPClientTemplates.TemplateManager.RegisterTemplateOverrides(tplctx);


