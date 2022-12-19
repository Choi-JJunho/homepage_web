
const callerStream = await navigator.mediaDevices.getUserMedia({
    video: true, audio:true
});

document.getElementById('video');