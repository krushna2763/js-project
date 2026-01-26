document.addEventListener("DOMContentLoaded", () => {

    const keys = document.querySelectorAll(".key");

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();

    const frequencies = {
        "C": 261.63,
        "C#": 277.18,
        "D": 293.66,
        "D#": 311.13,
        "E": 329.63,
        "F": 349.23,
        "F#": 369.99,
        "G": 392.00,
        "G#": 415.30,
        "A": 440.00,
        "A#": 466.16,
        "B": 493.88
    };

    const keyMap = {
        a: "C", w: "C#", s: "D", e: "D#", d: "E",
        f: "F", t: "F#", g: "G", y: "G#",
        h: "A", u: "A#", j: "B"
    };

    keys.forEach(key => {
        key.addEventListener("mousedown", () => playNote(key.dataset.note, key));
    });

    document.addEventListener("keydown", e => {
        const note = keyMap[e.key];
        if (note) {
            const key = document.querySelector(`.key[data-note="${note}"]`);
            playNote(note, key);
        }
    });

    function playNote(note, keyEl) {
        if (audioCtx.state === "suspended") {
            audioCtx.resume();
        }

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = "sine"; // try: square, triangle, sawtooth
        osc.frequency.value = frequencies[note];

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.8);

        if (keyEl) {
            keyEl.classList.add("active");
            setTimeout(() => keyEl.classList.remove("active"), 120);
        }
    }

});
