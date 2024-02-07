var chess_canvas = document.getElementById("chess_part");
chess_canvas.height = window.innerHeight * 0.97;
chess_canvas.width = window.innerHeight * 0.97;
var chess_c = chess_canvas.getContext("2d");
var draw_chess_board = function () {
    var cell_size = chess_canvas.height / 8;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if ((i + j) % 2 != 0) {
                chess_c.fillStyle = "#000000";
                chess_c.fillRect(j * cell_size, i * cell_size, cell_size, cell_size);
            }
            else {
                chess_c.fillStyle = "#ffffff";
                chess_c.fillRect(j * cell_size, i * cell_size, cell_size, cell_size);
            }
        }
    }
};
draw_chess_board();
var piece_color = document.querySelector("#color");
