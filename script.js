let song
    function preload() {
        song = ('Session02_1108.wav');
    }
    
    function setup() {
        createCanvas(windowWidth, windowHeight);

     }

    function draw() {
        background(0);
     }
    
     function mouseClicked() {
        if (song.isPlaying()){
            song.pause();
        } else {
            song.play();
        }
     }








// const container = document.getElementById('container');
// const canvas = document.getElementById('canvas1');
// const file = document.getElementById('fileupload');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// const ctx = canvas.getContext('2d');
// let audioSource;
// let analyser;

// //get value from user

// const inputElem = document.getElementById('color');
// let inputValue = inputElem.defaultValue;
// console.log(inputValue, "first");

// inputElem.addEventListener('change', (e) => {
//     let inputValue = e.target.value;
//     console.log(inputValue,"second");
// });

// container.addEventListener('click', function(){
//     const audio1 = document.getElementById('audio1');
//     audio1.src = ''
    
//     const audioContext = new AudioContext();
//     audio1.play();
//     audioSource = audioContext.createMediaElementSource(audio1);
//     analyser = audioContext.createAnalyser();
//     audioSource.connect(analyser);
//     analyser.connect(audioContext.destination);
//     analyser.fftSize = 128;
//     const bufferLength = analyser.frequencyBinCount;
//     const dataArray = new Uint8Array(bufferLength);

//     const barWidth = 15;
//     let barHeight;
//     let x;

//     function animate(){
//         x = 0;
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         analyser.getByteFrequencyData(dataArray);
//         drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray);
//         requestAnimationFrame(animate);
//     }
//     animate();
// });

// file.addEventListener('change', function(){
//     const files = this.files;
//     const audio1 = document.getElementById('audio1');
//     audio1.src = URL.createObjectURL(files[0]);
//     audio1.load();
//     audio1.play();

//     audioSource = audioContext.createMediaElementSource(audio1);
//     analyser = audioContext.createAnalyser();
//     audioSource.connect(analyser);
//     analyser.connect(audioContext.destination);
//     analyser.fftSize = 128;
//     const bufferLength = analyser.frequencyBinCount;
//     const dataArray = new Uint8Array(bufferLength);

//     const barWidth = 15;
//     let barHeight;
//     let x;

//     function animate(){
//         x = 0;
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         analyser.getByteFrequencyData(dataArray);
//         drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray);
//         requestAnimationFrame(animate);
//     }
//     animate();
// });

// function drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray){
//     for (let i = 0; i < bufferLength; i++){
//         barHeight = dataArray[i] * 1.2;
//         ctx.save();
//         ctx.translate(canvas.width/2, canvas.height/2);
//         ctx.rotate(i * Math.PI * 4/ bufferLength);
//         const hue = 240 + i * 1.5;
//         ctx.lineWidth = barHeight/10;
//         ctx.strokeStyle = 'hsl(' + hue + ',100%, 50%)';
//         ctx.fillStyle = 'hsl(' + hue + ',100%, 50%)';;
//         ctx.beginPath();
//         ctx.moveTo(0,0);
//         ctx.lineTo(0, barHeight);
//         ctx.stroke();
//         ctx.beginPath();
//         ctx.arc(0, barHeight + barHeight/5 , barHeight/20, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.beginPath();
//         ctx.arc(0, barHeight + barHeight/2, barHeight/10, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.restore();
//     }
// }



