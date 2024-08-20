const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

const player = {
    width: 50,
    height: 50,
    x: canvas.width / 2 - 25,
    y: canvas.height / 2 - 25,
    speed: 5,
    color: 'white'
};

const carrots = [];
const carrotWidth = 30;
const carrotHeight = 30;
let score = 0;

function drawPlayer() {
    context.fillStyle = player.color;
    context.fillRect(player.x, player.y, player.width, player.height);
}

function drawCarrots() {
    context.fillStyle = 'orange';
    carrots.forEach(carrot => {
        context.fillRect(carrot.x, carrot.y, carrotWidth, carrotHeight);
    });
}

function movePlayer() {
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                player.y -= player.speed;
                break;
            case 'ArrowDown':
                player.y += player.speed;
                break;
            case 'ArrowLeft':
                player.x -= player.speed;
                break;
            case 'ArrowRight':
                player.x += player.speed;
                break;
        }
    });
}

function generateCarrot() {
    const x = Math.random() * (canvas.width - carrotWidth);
    const y = Math.random() * (canvas.height - carrotHeight);
    carrots.push({ x, y });
}

function checkCollision() {
    carrots.forEach((carrot, index) => {
        if (
            player.x < carrot.x + carrotWidth &&
            player.x + player.width > carrot.x &&
            player.y < carrot.y + carrotHeight &&
            player.y + player.height > carrot.y
        ) {
            carrots.splice(index, 1);
            score++;
            document.getElementById('score').textContent = score;
        }
    });
}

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawCarrots();
    checkCollision();
    requestAnimationFrame(gameLoop);
}

function startGame() {
    movePlayer();
    setInterval(generateCarrot, 2000);  // Gera uma nova cenoura a cada 2 segundos
    gameLoop();
}

startGame();
