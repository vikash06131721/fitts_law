

const positions = [700, 600, 500];
const selectionCounts = {700: 0, 600: 0, 500: 0};
const minSelections = 10;
function getNextPosition() {
    // Function to check if all positions have been selected minSelections times
    const allSelectedMinTimes = () => Object.values(selectionCounts).every(count => count >= minSelections);
    
    let randomPosition;
    if (allSelectedMinTimes()) {
        // All positions have been selected minSelections times, pick any position randomly
        randomPosition = positions[Math.floor(Math.random() * positions.length)];
    } else {
        // Filter positions that need more selections
        let positionsNeedingSelection = positions.filter(pos => selectionCounts[pos] < minSelections);
        // Select randomly among those that haven't reached minSelections
        randomPosition = positionsNeedingSelection[Math.floor(Math.random() * positionsNeedingSelection.length)];
    }
    // Increment the count for the selected position
    selectionCounts[randomPosition]++;
    
    return randomPosition;
}

function click_random(vis_name){
	const pic2PositionX = 10; // Fixed position of pic2-container in pixels
    let pic3PositionX = 0; // This will store the current position of pic3-container
	document.getElementById(vis_name).addEventListener('click', function() {
        clickTimePic3 = Date.now(); // Record the current time in milliseconds
        // const positions = [700, 600, 500];


        // let randomPosition = positions[Math.floor(Math.random() * positions.length)];
        let randomPosition = getNextPosition()
        const pic2PositionX = 10;
        let distance = Math.abs(pic3PositionX - pic2PositionX); // Implement this function based on your setup
        
        if (clickTimePic2 && clickTimePic3) {
            let timeDiff = clickTimePic3 - clickTimePic2; // Calculate time difference in milliseconds
            sample = {
                "distance": distance,
                "time": timeDiff
            };
            trialData.push(sample);
            console.log(trialData); // Log the trial data
            if (trialData.length === 30) {
                alert("Completed 30 trials. Returning to the home screen.");
                // Navigate back to the home screen without resetting trialNumber
                document.getElementById('mainContent').style.display = 'none';
                document.getElementById('startupScreen').style.display = 'flex';
                trialNumber++;
                localStorage.setItem('trialNumber', trialNumber);
                document.getElementById('startupScreen').innerText = 'Click to start Trial ' + trialNumber;

                document.getElementById('trialText').innerText = 'Trial ' + trialNumber + '.';
                let trialDataJson = JSON.stringify(trialData);
                console.log(trialDataJson);
                const selectionCounts={700: 0, 600: 0, 500: 0};



            }
            
            // Reset click times for the next trial
            clickTimePic2 = null;
            clickTimePic3 = null;
        }

        pic3PositionX = randomPosition; // Update the global variable storing pic3's position
        this.style.transform = `translateX(${randomPosition}px)`;

            });
}


// function randomize_location(vis_name){
// 	let pic4PositionX = 0;
// 	document.getElementById(vis_name).addEventListener('click', function() {
// 		clickTimePic4 = Date.now();
// 		const positions = [700, 600, 500];
//         let randomPosition = positions[Math.floor(Math.random() * positions.length)];
//         pic3PositionX = randomPosition;
//         this.style.transform = `translateX(${randomPosition}px)`;
// 	});
// 	return [pic4PositionX,clickTimePic4]
// }

function click_random2(vis_name,pic4pos){
	const pic2PositionX = 10; // Fixed position of pic2-container in pixels
    let pic3PositionX = 0; // This will store the current position of pic3-container
	document.getElementById(vis_name).addEventListener('click', function() {
        clickTimePic3 = Date.now(); // Record the current time in milliseconds
        // const positions = [700, 600, 500];
        // let randomPosition = positions[Math.floor(Math.random() * positions.length)];
        let randomPosition = getNextPosition();
        const pic2PositionX = 10;

        let distance = Math.abs(randomPosition - pic2PositionX); // Implement this function based on your setup
        
        if (clickTimePic2 && clickTimePic3 && clickTimePic4) {
            let timeDiff = clickTimePic3 - clickTimePic2; // Calculate time difference in milliseconds
            sample = {
                "distance": distance,
                "time": timeDiff
            };
            trialData.push(sample);
            console.log(trialData); // Log the trial data
            if (trialData.length === 30) {
                alert("Completed 30 trials. Returning to the home screen.");
                // Navigate back to the home screen without resetting trialNumber
                document.getElementById('mainContent').style.display = 'none';
                document.getElementById('startupScreen').style.display = 'flex';
                trialNumber++;
                localStorage.setItem('trialNumber', trialNumber);
                document.getElementById('startupScreen').innerText = 'Click to start Trial ' + trialNumber;

                document.getElementById('trialText').innerText = 'Trial ' + trialNumber + '.';
                let trialDataJson = JSON.stringify(trialData);
                console.log(trialDataJson);
                const selectionCounts={700: 0, 600: 0, 500: 0};

            }
            
            // Reset click times for the next trial
            clickTimePic2 = null;
            clickTimePic3 = null;
            clickTimePic4=null;
        }

        pic3PositionX = randomPosition; // Update the global variable storing pic3's position
        this.style.transform = `translateX(${randomPosition}px)`;

            });
}




function click_random3(vis_name,pic4pos){
	const pic2PositionX = 10; // Fixed position of pic2-container in pixels
    let pic3PositionX = 0; // This will store the current position of pic3-container
	document.getElementById(vis_name).addEventListener('click', function() {
        clickTimePic3 = Date.now(); // Record the current time in milliseconds
        // const positions = [700, 600, 500];
        // let randomPosition = positions[Math.floor(Math.random() * positions.length)];
        let randomPosition = getNextPosition();
        const pic2PositionX = 10;

        let distance = Math.abs(randomPosition - pic2PositionX); // Implement this function based on your setup
        
        if (clickTimePic2 && clickTimePic3 && clickTimePic4 && clickTimePic5) {
            let timeDiff = clickTimePic3 - clickTimePic2; // Calculate time difference in milliseconds
            sample = {
                "distance": distance,
                "time": timeDiff
            };
            trialData.push(sample);
            console.log(trialData); // Log the trial data
            if (trialData.length === 30) {
                alert("Completed 30 trials. Returning to the home screen.");
                // Navigate back to the home screen without resetting trialNumber
                document.getElementById('mainContent').style.display = 'none';
                document.getElementById('startupScreen').style.display = 'flex';
                trialNumber++;
                localStorage.setItem('trialNumber', trialNumber);
                document.getElementById('startupScreen').innerText = 'Click to start Trial ' + trialNumber;

                document.getElementById('trialText').innerText = 'Trial ' + trialNumber + '.';
                let trialDataJson = JSON.stringify(trialData);
                console.log(trialDataJson);
                const selectionCounts={700: 0, 600: 0, 500: 0};

            }
            
            // Reset click times for the next trial
            clickTimePic2 = null;
            clickTimePic3 = null;
            clickTimePic4=null;
            clickTimePic5 = null;
        }

        pic3PositionX = randomPosition; // Update the global variable storing pic3's position
        this.style.transform = `translateX(${randomPosition}px)`;

            });
}




function click_random4(vis_name,pic4pos){
	const pic2PositionX = 10; // Fixed position of pic2-container in pixels
    let pic3PositionX = 0; // This will store the current position of pic3-container
	document.getElementById(vis_name).addEventListener('click', function() {
        clickTimePic3 = Date.now(); // Record the current time in milliseconds
        // const positions = [700, 600, 500];
        // let randomPosition = positions[Math.floor(Math.random() * positions.length)];
        let randomPosition = getNextPosition();
        const pic2PositionX = 10;

        let distance = Math.abs(randomPosition - pic2PositionX); // Implement this function based on your setup
        
        if (clickTimePic2 && clickTimePic3 && clickTimePic4 && clickTimePic5 && clickTimePic6) {
            let timeDiff = clickTimePic3 - clickTimePic2; // Calculate time difference in milliseconds
            sample = {
                "distance": distance,
                "time": timeDiff
            };
            trialData.push(sample);
            console.log(trialData); // Log the trial data
            if (trialData.length === 30) {
                alert("Completed 30 trials. Returning to the home screen.");
                // Navigate back to the home screen without resetting trialNumber
                document.getElementById('mainContent').style.display = 'none';
                document.getElementById('startupScreen').style.display = 'flex';
                trialNumber++;
                localStorage.setItem('trialNumber', trialNumber);
                document.getElementById('startupScreen').innerText = 'Click to start Trial ' + trialNumber;

                document.getElementById('trialText').innerText = 'Trial ' + trialNumber + '.';
                let trialDataJson = JSON.stringify(trialData);
                console.log(trialDataJson);
                const selectionCounts={700: 0, 600: 0, 500: 0};

            }
            
            // Reset click times for the next trial
            clickTimePic2 = null;
            clickTimePic3 = null;
            clickTimePic4=null;
            clickTimePic5 = null;
            clickTimePic6 = null;
        }

        pic3PositionX = randomPosition; // Update the global variable storing pic3's position
        this.style.transform = `translateX(${randomPosition}px)`;

            });
}



function click_random5(vis_name,pic4pos){
	const pic2PositionX = 10; // Fixed position of pic2-container in pixels
    let pic3PositionX = 0; // This will store the current position of pic3-container
	document.getElementById(vis_name).addEventListener('click', function() {
        clickTimePic3 = Date.now(); // Record the current time in milliseconds
        // const positions = [700, 600, 500];
        // let randomPosition = positions[Math.floor(Math.random() * positions.length)];
        let randomPosition = getNextPosition();
        const pic2PositionX = 10;

        let distance = Math.abs(randomPosition - pic2PositionX); // Implement this function based on your setup
        
        if (clickTimePic2 && clickTimePic3 && clickTimePic4 && clickTimePic5 && clickTimePic6 && clickTimePic7) {
            let timeDiff = clickTimePic3 - clickTimePic2; // Calculate time difference in milliseconds
            sample = {
                "distance": distance,
                "time": timeDiff
            };
            trialData.push(sample);
            console.log(trialData); // Log the trial data
            if (trialData.length === 30) {
                alert("Completed 30 trials. Returning to the home screen.");
                // Navigate back to the home screen without resetting trialNumber
                document.getElementById('mainContent').style.display = 'none';
                document.getElementById('startupScreen').style.display = 'flex';
                trialNumber++;
                localStorage.setItem('trialNumber', trialNumber);
                document.getElementById('startupScreen').innerText = 'Click to start Trial ' + trialNumber;

                document.getElementById('trialText').innerText = 'Trial ' + trialNumber + '.';
                let trialDataJson = JSON.stringify(trialData);
                console.log(trialDataJson);
                const selectionCounts={700: 0, 600: 0, 500: 0};

            }
            
            // Reset click times for the next trial
            clickTimePic2 = null;
            clickTimePic3 = null;
            clickTimePic4=null;
            clickTimePic5 = null;
            clickTimePic6 = null;
            clickTimePic7 = null;
        }

        pic3PositionX = randomPosition; // Update the global variable storing pic3's position
        this.style.transform = `translateX(${randomPosition}px)`;

            });
}
