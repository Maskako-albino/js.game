let paddleWidth = 10, paddleHeight = 100, ballSize = 10;
let player1Y, player2Y;
let player1Score = 0, player2Score = 0;
let ballX, ballY;
let ballSpeedX = 5, ballSpeedY = 5;

function setup() {
    createCanvas(800, 600);
    player1Y = height / 2 - paddleHeight / 2;
    player2Y = height / 2 - paddleHeight / 2;
    ballX = width / 2;
    ballY = height / 2;
}

function draw() {
    background(0);
    
    // Desenha as raquetes
    fill(255);
    rect(0, player1Y, paddleWidth, paddleHeight);
    rect(width - paddleWidth, player2Y, paddleWidth, paddleHeight);
    
    // Desenha a bola
    ellipse(ballX, ballY, ballSize * 2, ballSize * 2);
    
    // Movimento da bola
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    
    // Colisão com as bordas superiores e inferiores
    if (ballY - ballSize < 0 || ballY + ballSize > height) {
        ballSpeedY = -ballSpeedY;
    }
    
    // Pontuação
    if (ballX - ballSize < 0) {
        player2Score++;
        resetBall();
    }
    
    if (ballX + ballSize > width) {
        player1Score++;
        resetBall();
    }
    
    // Colisão com as raquetes
    if (ballX - ballSize < paddleWidth && ballY > player1Y && ballY < player1Y + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    }
    
    if (ballX + ballSize > width - paddleWidth && ballY > player2Y && ballY < player2Y + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    }
    
    // Movimento das raquetes
    if (keyIsDown(87)) { // W
        player1Y -= 10;
    }
    if (keyIsDown(83)) { // S
        player1Y += 10;
    }
    if (keyIsDown(UP_ARROW)) {
        player2Y -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        player2Y += 10;
    }
    
    // Exibir pontuação
    fill(255, 165, 0);
    textSize(32);
    text(player1Score, width * 0.1, 40);
    text(player2Score, width * 0.9, 40);
}

function resetBall() {
    ballX = width / 2;
    ballY = height / 2;
    ballSpeedX = -ballSpeedX;
}
