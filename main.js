
canvas = new fabric.Canvas("myCanvas");
playerX = 400;
playerY = 200;
blockWidth = 30;
blockHeight = 30;
player = "";
block = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        player = Img;
        player.scaleToWidth(150);
        player.scaleToHeight(140);
        player.set({
            top: playerY,
            left: playerX
        });
        canvas.add(player);
    });
}

function blockUpdate(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        block = Img;
        block.scaleToWidth(blockWidth);
        block.scaleToHeight(blockHeight);
        block.set({
            top: playerY,
            left: playerX
        });
        canvas.add(block);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log("keyPressed=" + keyPressed);
    if (e.shiftKey == true && keyPressed == 80) {
        console.log("P+Shift");
        blockWidth = blockWidth + 10;
        blockHeight = blockHeight + 10;
        document.getElementById("width").innerHTML = blockWidth;
        document.getElementById("height").innerHTML = blockHeight;
    }
    if (e.shiftKey == true && keyPressed == 77) {
        console.log("M+Shift");
        blockWidth = blockWidth - 10;
        blockHeight = blockHeight - 10;
        document.getElementById("width").innerHTML = blockWidth;
        document.getElementById("height").innerHTML = blockHeight;
    }
    if (keyPressed == 37) {
        console.log("Left");
        left();
    }
    if (keyPressed == 38) {
        console.log("Up");
        up();
    }
    if (keyPressed == 39) {
        console.log("Right");
        right();
    }
    if (keyPressed == 40) {
        console.log("Down");
        down();
    }
    if (keyPressed == 67) {
        console.log("c");
        blockUpdate('cloud.jpg');
    }
    if (keyPressed == 68) {
        console.log("d");
        blockUpdate('dark_green.png');
    }
    if (keyPressed == 70) {
        console.log("f");
        blockUpdate('floor.png');
    }
    if (keyPressed == 71) {
        console.log("g");
        blockUpdate('glowstone.jpg');
    }
    if (keyPressed == 76) {
        console.log("l");
        blockUpdate('light_green.png');
    }
    if (keyPressed == 82) {
        console.log("r");
        blockUpdate('roof.jpg');
    }
    if (keyPressed == 84) {
        console.log("t");
        blockUpdate('trunk.jpg');
    }
    if (keyPressed == 87) {
        console.log("w");
        blockUpdate('wall.jpg');
    }
    if (keyPressed == 89) {
        console.log("y");
        blockUpdate('yellow_wall.png');
    }

}

function up() {
    if (playerY > 0) {
        playerY = playerY - blockHeight;
        canvas.remove(player);
        playerUpdate();
    }
}

function down() {
    if (playerY < 500) {
        playerY = playerY + blockHeight;
        canvas.remove(player);
        playerUpdate();
    }
}

function left() {
    if (playerX > 0) {
        playerX = playerX - blockWidth;
        canvas.remove(player);
        playerUpdate();
    }
}

function right() {
    if (playerX < 850) {
        playerX = playerX + blockWidth;
        canvas.remove(player);
        playerUpdate();
    }
}

function controls(){
     
}