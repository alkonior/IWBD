"use strict"

var requestAnimFrame = (function()
    {
        return window.requestAnimationFrame       ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame    ||
               window.oRequestAnimationFrame      ||
               window.msRequestAnimationFrame;
    })();

var canvas;
var ctx;
window.onload=()=>
{
    canvas = document.getElementById("main_canvas");
    ctx = canvas.getContext("2d");
    canvas.width = 1400;
    canvas.height = 960;
    requestAnimFrame(main);


}

var World;
function init()
{
    World=new Map(20,20,2);
    World.generateMap();
}

function render()
{
    for (var i3=0;i3<World._depth;i3++)
    {
        for (var i1=0;i1<World._width;i1++)
        {
            for (var i2=0;i2<World._height;i2++)
            {
				if (World._state[i1][i2][i3]!=null)
                World._state[i1][i2][i3].draw(ctx);
            }
        }
    }
}

var lastTime;

function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    //update(dt);

    render();

    lastTime = now;
    requestAnimFrame(main);
};


