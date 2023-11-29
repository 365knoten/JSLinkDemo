
export class JSLinkContext {

    postfields;
    rendered = false;
    afterRenderfunc = null;

    constructor() {
        this.postfields = 0;
    }

    afterRender(afterRenderfunc) {
        this.afterRenderfunc = afterRenderfunc;
    }


    /**
     * This should be used as an override in the JsLink PostRender
     * @param ctx
     */
    onPostRenderTemplate(ctx) {
        this.postfields++;
        if (this.postfields == Object.keys(ctx.Templates.Fields).length) {
            if (this.afterRenderfunc != null) {


                try {
                    const newNode = document.createElement("div");    
                    const tab = document.querySelector("span#part1");
                    tab.insertBefore(newNode,tab.children[0]);
                    this.afterRenderfunc(ctx,newNode);

                }
                catch(ex){
                    console.log(ex);
                }





                
            }
            this.rendered = true;
        }
    }


}
