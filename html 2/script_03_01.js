// Szymon Więzowski

function init() 
{
	var myDiv = document.createElement("div");
    document.body.appendChild(myDiv);

    var buttonSetText = document.createElement("button");
    buttonSetText.innerHTML = "USTAW TEKST";
    buttonSetText.onclick = function () 
    {
        myDiv.innerHTML = "SUPER TEKST USTAW MI STYL I MNIE SCHOWAJ";
    };
    document.body.appendChild(buttonSetText);

    var buttonSetStyles = document.createElement("button");
    buttonSetStyles.innerHTML = "Wystilyzuj";
    buttonSetStyles.onclick = function () 
    {
        myDiv.style.margin = "100px";
        myDiv.style.padding = "150px";
        myDiv.style.color = "red";
    };
    document.body.appendChild(buttonSetStyles);

    var buttonToggle = document.createElement("button");
    buttonToggle.innerHTML = "POKAZ/UKRYJ";
    buttonToggle.onclick = function () 
    {
        if (myDiv.style.display === "none" || myDiv.style.display === "") 
        {
            myDiv.style.display = "block";
        } 
        else 
        {
            myDiv.style.display = "none";
        }
    };
    document.body.appendChild(buttonToggle);
    // FORMULARZ
    var mojForm = document.createElement("form");
    document.body.appendChild(mojForm);

    var mojWpis = document.createElement("input");
    mojWpis.type = "text";
    mojForm.appendChild(mojWpis);

    var alertButton = document.createElement("button");
    alertButton.innerHTML = "ACHTUNG";
    alertButton.onclick = function () 
    {
        var inputValue = mojWpis.value;

        alert("WAZNA WIADOMOSC:" + inputValue);
    };
    mojForm.appendChild(alertButton);
}

window.onload = init;