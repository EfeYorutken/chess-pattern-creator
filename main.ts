let chess_canvas : HTMLCanvasElement = document.getElementById("chess_part") as HTMLCanvasElement;

chess_canvas.height = window.innerHeight * 0.97;
chess_canvas.width = window.innerHeight * 0.97;

const chess_c: CanvasRenderingContext2D= chess_canvas.getContext("2d") as CanvasRenderingContext2D;

const draw_chess_board = ()=>{
	const cell_size = chess_canvas.height/8;
	for(let i = 0; i < 8; i++){
		for(let j = 0; j < 8; j++){
			if((i+j) % 2 != 0){
				chess_c.fillStyle = "#000000";
				chess_c.fillRect(j*cell_size,i*cell_size,cell_size,cell_size);
			}
			else{
				chess_c.fillStyle = "#ffffff";
				chess_c.fillRect(j*cell_size,i*cell_size,cell_size,cell_size);
			}
		}
	}
}

draw_chess_board();

let piece_color = document.querySelector("#color") as HTMLElement | null;
