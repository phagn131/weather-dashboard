//inst classes//

    const ft = new Fetch();
    const ui = new UI();


    //add event listeners//

    const search = document.getElementsById("searchUser");
    const button = document.getElementById("submit");


    button.addEventListener("click", () => {
        const currentVal = search.value;

        ft.getCurrent(currentVal).then((data) => {
            //call a UI method//
            ui.populateUI(data);
            //call save to LS//
            ui.saveToLs(data);
            
        });
    });