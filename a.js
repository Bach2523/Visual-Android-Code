<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple JS Example</title>
</head>
<body>
    <h1 id="heading">Hello, World!</h1>
    <button onclick="changeText()">Click me</button>

    <script>
        function changeText() {
            document.getElementById("heading").innerHTML = "You clicked the button!";
        }
    </script>
</body>
</html>
