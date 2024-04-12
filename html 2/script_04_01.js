// Szymon Wiezowski
$(document).ready(function() 
{
    function addDynamiczne()
    {
        var dynamicContainer = $("<div>").attr("id", "dynamicContainer");
        $("body").append(dynamicContainer);

        var elementTypes = ["div", "button", "span", "p", "a", "h1", "input", "img", "ul", "li"];

        for (let i = 1; i <= 10; i++) 
        {
            var randomIndex = Math.floor(Math.random() * elementTypes.length);
            var elementType = elementTypes[randomIndex];

            var newElement = $("<" + elementType + ">").text("Element " + i).attr("id", "element" + i);

            dynamicContainer.append(newElement);
            newElement.on("click", function() 
            {
                alert("Kliknięto " + elementType + " o ID: " + $(this).attr("id"));
            });

            newElement.on("mouseenter", function() 
            {
                $(this).css("background-color", "lightblue");
            });

            newElement.on("mouseleave", function() 
            {
                $(this).css("background-color", "");
            });

            newElement.on("focus", function() 
            {
                $(this).css("border", "2px solid red");
           });
            newElement.on("blur", function() 
            {
                $(this).css("border", "");
            });
        }
    }
    addDynamiczne();
});