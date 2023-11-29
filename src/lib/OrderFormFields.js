
function getWeight(content, FieldOrder) {
    var value = FieldOrder.indexOf(content);
    if (value > -1) { return value; }
    return 999;
}

function shouldBeHidden(content, HideFields) {
    return HideFields.indexOf(content) > -1;
}

function shouldRename(content, RenameFields) {
    if (RenameFields == null) { return false; }
    return RenameFields.hasOwnProperty(content)
}


const getID=(row)=> {
    if (row!=null){
        const header = row.querySelector(".ms-standardheader");
        if (header != null && header.attributes["id"] != null) {
            return header.attributes["id"].value;
        } else {
            var link = row.querySelector(".ms-standardheader>a");
            if (link != null && link.attributes["name"] != null) {
                return link.attributes["name"].value.replace("SPBookmark_", "");
            }
        }    
    }
    return "";

}



export const OrderFormFields = (FieldOrder, HideFields, RenameFields) => {
        var table, rows, switching, i, x, y, shouldSwitch, switchcount = 0;
        table = document.querySelector(".ms-formtable");
        switching = true;
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
      
          // Start by saying: no switching is done:
          switching = false;
          rows = table.rows;
          /* Loop through all table rows (except the
          first, which contains table headers): */
          for (i = 0; i < (rows.length); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
      
      
            var currentrowid=getID(rows[i]);
      
            if (HideFields!=null){
              if (shouldBeHidden(currentrowid,HideFields)){
                  rows[i].style.display="none";
              }
            }
            if (RenameFields!=null){
              if (shouldRename(currentrowid,RenameFields)){
                var elem=rows[i].querySelector(".ms-standardheader nobr");
                if (elem==null){
                  elem=rows[i].querySelector(".ms-standardheader");
                }
                elem.innerHTML=RenameFields[currentrowid];
              }
            }
      
      
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = getWeight(currentrowid,FieldOrder);
            y = getWeight(getID(rows[i+1]),FieldOrder);
      
              if (x > y) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
              }
      
          }
          if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount ++;
          }
        }
      }
      