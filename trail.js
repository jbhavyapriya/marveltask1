const calculate = () => {

    let list = [];
    let chemistry = document.querySelector("#chemistry").value;
    let name = document.querySelector("#name").value;
    let maths = document.querySelector("#maths").value;
    let phy = document.querySelector("#phy").value;
    let grades = "";
    
    let totalgrades =
        parseFloat(chemistry) +
        parseFloat(maths) +
        parseFloat(phy);
    
    
    let percentage = (totalgrades / 400) * 100;

const para = document.createElement("li");
const node = document.createTextNode(`${percentage} ${totalgrades} ${name}`);
para.appendChild(node);
const element = document.getElementById("showdata");
element.appendChild(para);


    };

    const sort = () => {
  
        var list, i, run, li, stop;

        list = document.getElementById("showdata");

        run = true;

        while (run) {
            run = false;
            li = list.getElementsByTagName("li");
           
            for (i = 0; i < (li.length - 1); i++) {
                stop = false;
                if (li[i].innerHTML.toLowerCase() > 
                    li[i + 1].innerHTML.toLowerCase()) {
                    stop = true;
                    break;
                }
            }

            if (stop) {
                li[i].parentNode.insertBefore(
                        li[i + 1], li[i]);

                run = true;
            }
        }
    }