function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices_kiri = [

        -0.8, 0.1, 0.75, 0.75, 0.75, //titik a
        -0.4, 0.1, 0.75, 0.75, 0.75, //titik b 
        -0.4, 0, 0.75, 0.75, 0.75, //titik c
        -0.8, 0.1, 0.75, 0.75, 0.75, //titik a
        -0.7925, 0, 0.75, 0.75, 0.75, //titik d
        -0.4, 0, 0.75, 0.75, 0.75, // titik c
        -0.8, 0.1, 0.80, 0.80, 0.80, //titik a
        -0.775, 0.6, 0.80, 0.80, 0.80, //titik e
        -0.4, 0.1, 0.80, 0.80, 0.80, //titik b
        -0.775, 0.6, 0.80, 0.80, 0.80, //titik e
        -0.434, 0.6, 0.80, 0.80, 0.80, //titik f
        -0.4, 0.1, 0.80, 0.80, 0.80, //titik b
        -0.8, 0.1, 0.9960, 0.75, 0.7929, //titik a
        -0.7, 0.1, 0.9960, 0.75, 0.7929, //titik g
        -0.7, 0.145, 0.9960, 0.75, 0.7929, // titik h
        -0.7968, 0.145, 0.9960, 0.75, 0.7929, //titik i
        -0.7, 0.145, 0.9960, 0.75, 0.7929, //titik h
        -0.8, 0.1, 0.9960, 0.75, 0.7929, //titik a
        -0.675, 0.145, 0.9960, 0.75, 0.7929, //titik j
        -0.7, 0.145, 0.9960, 0.75, 0.7929, //titik h 
        -0.7, 0.1, 0.9960, 0.75, 0.7929, // titik g
        -0.675, 0.145, 0, 0.7460, 0.9960, //titik j
        -0.675, 0.1, 0, 0.7460, 0.9960, //titik k
        -0.7, 0.1, 0, 0.7460, 0.9960, //titik g
        -0.7, 0.1, 0, 0.7460, 0.9960, //titik g
        -0.4, 0.1, 0, 0.7460, 0.9960, //titik b
        -0.4022, 0.145, 0, 0.7460, 0.996, //titik l
        -0.675, 0.145, 0, 0.7460, 0.9960, //titik j
        -0.4022, 0.145, 0, 0.7460, 0.9960, //titik l
        -0.675, 0.1, 0, 0.7460, 0.9960, //titik k
        -0.75, 0.6, 0.9960, 0.75, 0.7929, //titik m
        -0.67, 0.6, 0.9960, 0.75, 0.7929, //titik n
        -0.7523, 0.5, 0.9960, 0.75, 0.7929, //titik o
        -0.6723, 0.5, 0.9960, 0.75, 0.7929, //titik q
        -0.67, 0.6, 0.9960, 0.75, 0.7929, //titik n
        -0.7523, 0.5, 0.9960, 0.75, 0.7929 //titik o

    ];

    var vertices_kanan = [
        0.75, -0.6, 0.75, 0.75, 0.75, //titik a
        0.75, -0.05, 0.75, 0.75, 0.75, //titik b
        0.825, -0.075, 0.75, 0.75, 0.75, //titik c
        0.825, -0.58, 0.75, 0.75, 0.75, //titik d
        0.75, -0.6, 0.75, 0.75, 0.75, //titik a
        0.825, -0.075, 0.75, 0.75, 0.75, //titik c
        0.4, -0.575, 0.75, 0.75, 0.75, //titik e
        0.75, -0.6, 0.75, 0.75, 0.75, //titik a
        0.75, -0.05, 0.75, 0.75, 0.75, //titik b
        0.4, -0.575, 0.75, 0.75, 0.75, //titik e
        0.4, -0.075, 0.75, 0.75, 0.75, //titik f
        0.75, -0.05, 0.75, 0.75, 0.75, //titik b
        0.75, -0.05, 0.9960, 0.75, 0.7929, //titik b
        0.75, -0.105, 0.9960, 0.75, 0.79290, //titik g
        0.7, -0.0565, 0.9960, 0.75, 0.79290, //titik h
        0.7, -0.0565, 0.9960, 0.75, 0.79290, //titik h
        0.7, -0.1047, 0.9960, 0.75, 0.79290, //titik i
        0.75, -0.105, 0.9960, 0.75, 0.79290, //titik g
        0.675, -0.1045, 0.9960, 0.75, 0.79290, //titik j
        0.7, -0.0565, 0.9960, 0.75, 0.79290, //titik h
        0.7, -0.1047, 0.9960, 0.75, 0.79290, //titik i
        0.675, -0.1045, 0, 0.7460, 0.9960, //titik j
        0.7, -0.0565, 0, 0.7460, 0.9960, //titik h
        0.675, -0.0567, 0, 0.7460, 0.9960, //titik k
        0.675, -0.0567, 0, 0.7460, 0.9960, //titik k
        0.4, -0.075, 0, 0.7460, 0.9960, //titik f
        0.675, -0.1045, 0, 0.7460, 0.9960, //titik j
        0.675, -0.1045, 0, 0.7460, 0.9960, //titik j
        0.4, -0.075, 0, 0.7460, 0.9960, //titik f
        0.4, -0.1195, 0, 0.7460, 0.9960, //titik l
        0.725, -0.5975, 0.9960, 0.75, 0.79290, //titik m
        0.725, -0.475, 0.9960, 0.75, 0.79290, //titik n
        0.645, -0.5925, 0.9960, 0.75, 0.79290, //titik o
        0.645, -0.5925, 0.9960, 0.75, 0.79290, //titik o
        0.645, -0.475, 0.9960, 0.75, 0.79290, //titik q
        0.725, -0.475, 0.9960, 0.75, 0.79290 //titik n
    ];

    var vertices = [...vertices_kiri, ...vertices_kanan];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying  vec3 vColor;
        uniform mat4 uTranslate;
        void main(){
            gl_Position = uTranslate * vec4(aPosition, 0.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main(){
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    var speed = 0.0012;
    var dy = 0;
    const uTranslate = gl.getUniformLocation(shaderProgram, 'uTranslate');

    function render() {
        if (dy >= 1.05 || dy <= -0.4) speed = -speed;
        dy += speed;

        const left = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0, 0.0, 0.0, 1.0,
        ]

        const right = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0, dy, 0.0, 1.0,
        ]

        gl.clearColor(0.2, 0.7, 0.50, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniformMatrix4fv(uTranslate, false, left);
        gl.drawArrays(gl.TRIANGLES, 0, vertices_kiri.length / 5);

        gl.uniformMatrix4fv(uTranslate, false, right);
        gl.drawArrays(gl.TRIANGLES, vertices_kiri.length / 5, vertices_kanan.length / 5);

        requestAnimationFrame(render);
    }
    render();
}