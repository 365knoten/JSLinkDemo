export class StateButtons {

    _stateButtons = [];
    _stateValue = "";
    _defaultValue = "";


    defaultValue(value) {
        this._defaultValue = value;
        return this;
    }

    addButton(title, visibleInState, nextState) {
        this._stateButtons.push({
            title: title,
            visibleInState: visibleInState,
            nextState, nextState
        })
        return this;
    }


    addButtons(buttons) {
        buttons.forEach((buttondef) => {
            this.addButton(buttondef.title,buttondef.visibleInState,buttondef.nextState);
        })
        return this;
    }


    renderButton(buttondef, mountElement) {       
        if (buttondef.visibleInState == this._stateValue) {
            let button = document.createElement('input');
            button.type="button";
            button.value=buttondef.title;
   
            button.onclick=()=>{                
                this._stateValue=buttondef.nextState;
                SPClientForms.ClientFormManager.SubmitClientForm('WPQ1')
            }

            // appending button to div
            mountElement.appendChild(button);;
        }
    }



    render(mountElement) {
        this._stateButtons.forEach((buttondef) => {
            this.renderButton(buttondef, mountElement);
        })
        return this;
    }

    overrideRendering() {
        const setStateValue = (value) => {
            if (value == null || value == "" || value == " ") {
                this._stateValue = this._defaultValue;
            } else {
                this._stateValue = value;
            }
            return this._stateValue;
        }
        const getStateValue = () => {
            return this._stateValue;
        }
        return (ctx) => {
            try {
                var formCtx = SPClientTemplates.Utility.GetFormContextForCurrentField(ctx);
                // Register a callback just before submit.
                formCtx.registerGetValueCallback(formCtx.fieldName, function () {
                    return getStateValue();
                });
                return setStateValue(ctx.CurrentFieldValue);
            } catch (ex) {
                console.log(ex);
            }
        }


    }
}