const videoElement = document.querySelector("#video");
const button = document.querySelector("#button");

// select media stream to play.

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {}
}

button.addEventListener("click", selectMediaStream);

// on load
selectMediaStream();
