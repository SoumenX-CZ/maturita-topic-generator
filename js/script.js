// Fetch topics from the JSON file
fetch("topics.json")
  .then((response) => response.json())
  .then((data) => {
    const mathTopics = data.mathematics;
    const czechTopics = data.czech;

    const topicContainer = document.getElementById("topicContainer");
    const topicElement = document.getElementById("topic");
    const timerContainer = document.getElementById("timerContainer");

    let timerInterval;
    let timeRemaining = 15 * 60; // 15 minutes in seconds
    let isPaused = true;

    // Function to start or resume the timer
    function startTimer() {
      if (!isPaused) return; // If already running, do nothing
      isPaused = false;
      timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
          timeRemaining--;
          timerContainer.textContent = `Zbývající čas: ${formatTime(
            timeRemaining
          )}`;
        } else {
          clearInterval(timerInterval);
          timerContainer.textContent = "Čas vypršel!";
          playBeep();
        }
      }, 1000);
    }

    // Function to pause the timer
    function pauseTimer() {
      isPaused = true;
      clearInterval(timerInterval);
    }

    // Function to stop the timer
    function stopTimer() {
      isPaused = true;
      clearInterval(timerInterval);
      timeRemaining = 15 * 60; // Reset to 15 minutes
      timerContainer.textContent = `Zbývající čas: ${formatTime(
        timeRemaining
      )}`;
    }

    // Function to format time in MM:SS
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
        2,
        "0"
      )}`;
    }

    // Function to play a beep sound
    function playBeep() {
      const beep = new Audio("done.ogg"); // Use the done.ogg file
      beep.play();
    }

    // Event listener for mathematics button
    document
      .getElementById("mathButton")
      .addEventListener("click", function () {
        const topicIndex = Math.floor(Math.random() * mathTopics.length);
        const subtopicNumber = Math.floor(Math.random() * 5) + 1; // Random number from 1 to 5
        const topic = mathTopics[topicIndex];
        topicElement.innerHTML = `
          <div class="topic-number fw-bold fs-4">Téma č. ${
            topicIndex + 1
          }, Příklad č. ${subtopicNumber}</div>
          <div class="topic-name fs-6">${topic}</div>
        `;
        topicContainer.classList.remove("d-none");
        topicContainer.classList.add("alert-primary");
        stopTimer(); // Reset timer when a new topic is selected
      });

    // Event listener for Czech button
    document
      .getElementById("czechButton")
      .addEventListener("click", function () {
        const topicIndex = Math.floor(Math.random() * czechTopics.length);
        const topic = czechTopics[topicIndex];
        topicElement.innerHTML = `
          <div class="topic-number fw-bold fs-4">Téma č. ${topicIndex + 1}</div>
          <div class="topic-name fs-6">${topic}</div>
        `;
        topicContainer.classList.remove("d-none");
        topicContainer.classList.add("alert-secondary");
        stopTimer(); // Reset timer when a new topic is selected
      });

    // Add event listeners to timer control buttons
    document
      .getElementById("startButton")
      .addEventListener("click", startTimer);
    document
      .getElementById("pauseButton")
      .addEventListener("click", pauseTimer);
    document.getElementById("stopButton").addEventListener("click", stopTimer);

    // Initialize timer display
    timerContainer.textContent = `Zbývající čas: ${formatTime(timeRemaining)}`;
  })
  .catch((error) => console.error("Error loading topics:", error));
