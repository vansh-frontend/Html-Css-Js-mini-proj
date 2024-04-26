   


/*camera*/
let isDetecting = false;
        let videoStream;

        function startGestureDetection() {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    const video = document.getElementById('video');
                    videoStream = stream;
                    video.srcObject = stream;

                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');

                    video.addEventListener('loadedmetadata', () => {
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;

                        isDetecting = true;

                        const detectionInterval = setInterval(() => {
                            if (!isDetecting) {
                                clearInterval(detectionInterval);
                                stopVideoStream();
                                return;
                            }

                            context.drawImage(video, 0, 0, canvas.width, canvas.height);
                            detectGesture();
                        }, 1000 / 30); // 30 frames per second
                    });
                })
                .catch((error) => {
                    console.error('Error accessing the camera:', error);
                });
        }

        function stopGestureDetection() {
            isDetecting = false;
        }

        function stopVideoStream() {
            if (videoStream) {
                const tracks = videoStream.getTracks();
                tracks.forEach(track => track.stop());
            }
        }

        function detectGesture() {
            const canvas = document.querySelector('canvas');
            const context = canvas.getContext('2d');

            // For simplicity, let's check if the average pixel color in the center of the canvas is above a threshold
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            const pixel = context.getImageData(centerX, centerY, 1, 1).data;
            const averageColor = (pixel[0] + pixel[1] + pixel[2]) / 3;

            // You can customize the threshold based on your needs
            const threshold = 100;

            if (averageColor > threshold) {
                console.log('Gesture detected!');
                // Perform your action when a gesture is detected
            }
        }
      