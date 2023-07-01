function canvas() {
    const config = {
        dotMin: 2,
        dotMax: 7,
        sphereRad: 300,
        bigDotRad: 9,
        mouseSize: 120,
        massFactor: 0.002,
        defColor: `rgb(255, 166, 0, 1)`,
        smooth: 0.85,
    }
    const TWO_PI = 2 * Math.PI;
    const canvas = document.querySelector('.promo__animation');
    const ctx = canvas.getContext(`2d`);

    let w, h, mouse, dots;

    //создаем чистицу
    class Dot {
        constructor(r){
            this.oneX = Math.random()*w;
            this.oneY = Math.random()*h;

            this.pos = {x: mouse.x, y: mouse.y},                // координаты частиц       
            this.vel = {x: 1, y: 1},                            // изначальная скорость частиц
            this.rad = r || random(config.dotMin, config.dotMax);    // радиус частиц
            this.mass = this.rad * config.massFactor;
            this.color = config.defColor;
        }

        draw(x, y) {
            this.pos.x = x || this.pos.x + this.vel.x;
            this.pos.y = y || this.pos.y + this.vel.y;
            createCircle(this.pos.x, this.pos.y, this.rad, true, this.color); //цвет частицы
            createCircle(this.pos.x, this.pos.y, this.rad, false, this.color);//контур частицы
        }
    }

    function upDateDots() {
        for(let i = 0; i < dots.length; i++) {
            let acc = {x: 0, y: 0}

            for(let j = 0; j < dots.length; j++) {
                if(i==j) continue;
                let[a, b] = [dots[i], dots[j]];

                let delta = {x: b.pos.x - a.pos.x, y: b.pos.y - a.pos.y}
                let dist = Math.sqrt( delta.x * delta.x + delta.y * delta.y) || 1;
                let forse = (dist - config.sphereRad) / dist* b.mass;

                if(j == 0) {
                    let alfa = config.mouseSize / dist;
                    a.color = `rgb(255, 166, 0, ${alfa})`;
                    dist < config.mouseSize ? forse = (dist - config.mouseSize) * b.mass : forse = a.mass
                }

                acc.x += delta.x * forse;
                acc.y += delta.y * forse;
            }

            dots[i].vel.x = dots[i].vel.x * config.smooth + acc.x * dots[i].mass;
            dots[i].vel.y = dots[i].vel.y * config.smooth + acc.y * dots[i].mass;
        }
        dots.map(e => e == dots[0] ? e.draw(mouse.x, mouse.y) : e.draw());
    }

    //рисует частицу
    function createCircle(x, y, rad, fill, color) {
        ctx.fillStyle = ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, rad, 0, TWO_PI);
        ctx.closePath();
        fill ? ctx.fill() : ctx.stroke();
    }

    function random(min, max) {
        return Math.random() * (max - min) * min;
    }

    function setPos({layerX, layerY }) {
        [mouse.x, mouse.y] = [layerX, layerY]
       
    }

    //эта функция активирует полет частиц или же останавливает
    function isDown() {
        mouse.down = !mouse.down
        //когда down = true летят частитцы
    }

    //наполняем массив частицами, для получения картинки сразу
    /* function  redDrawParticles() {
        for(let i in dots) {
            dots[i].draw();
        }
    } */

    //присваиваем значения переменных
    function init(){
        w = canvas.width = innerWidth;
        h = canvas.height = innerHeight;

        //изначальные координаты мыши
        mouse = { x: w / 1.4, y: h / 2, down: false} 
        
        dots = [];

        for (let i = 0; i < 350; i++) {
            dots.push(new Dot());
        }
        
        //dots.push(new Dot(config.bigDotRad));
    }

    //функция для перерисовки частиц
    function loop() {
        ctx.clearRect(0, 0, w, h);

       //redDrawParticles();

       //добавление частицы ,если нажата кнопка
        if(mouse.down) {dots.push(new Dot()); }
        upDateDots();
        
        window.requestAnimationFrame(loop);
    }

    init();
    loop();
 
    canvas.addEventListener('mousemove', setPos);
    window.addEventListener('mousedown', isDown);
    window.addEventListener('mouseup', isDown);
}

export default canvas;
