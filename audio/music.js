Tone.Master.mute = false;
Tone.Transport.bpm.value = 80

const polySynthA1 = new Tone.PolySynth(Tone.Synth, {
  volume: -12,
  oscillator: {
    type: "square6",
  },
  envelope: {
    attack: 0.01,
    decay: 0.05,
    sustain: 0.4,
    release: 1.5,
  }
});

const polySynthA2 = new Tone.PolySynth(Tone.Synth, {
  volume: -12,
  oscillator: {
    type: "square3",
  },
  envelope: {
    attack: 0.01,
    decay: 0.05,
    sustain: 0.4,
    release: 1.5,
  }
});

const polySynthB1 = new Tone.PolySynth(Tone.Synth, {
  volume: -12,
  oscillator: {
    type: "sawtooth6",
  },
  envelope: {
    attack: 0.01,
    decay: 0.05,
    sustain: 0.4,
    release: 1.5,
  }
});

const polySynthB2 = new Tone.PolySynth(Tone.Synth, {
  volume: -12,
  oscillator: {
    type: "sawtooth9",
  },
  envelope: {
    attack: 0.01,
    decay: 0.05,
    sustain: 0.4,
    release: 1.5,
  }
});

const polySynthC1 = new Tone.PolySynth(Tone.Synth, {
  volume: -12,
  oscillator: {
    type: "triangle",
  },
  envelope: {
    attack: 0.01,
    decay: 0.05,
    sustain: 0.4,
    release: 1.5,
  }
})

const polySynthC2 = new Tone.PolySynth(Tone.Synth, {
  volume: -12,
  oscillator: {
    type: "triangle6",
  },
  envelope: {
    attack: 0.01,
    decay: 0.05,
    sustain: 0.4,
    release: 1.5,
  }
});

const polySynthD1 = new Tone.PolySynth(Tone.Synth, {
  volume: -12,
  oscillator: {
    type: "sine",
  },
  envelope: {
    attack: 0.01,
    decay: 0.05,
    sustain: 0.4,
    release: 1.5,
  }
})

const polySynthD2 = new Tone.PolySynth(Tone.Synth, {
  volume: -12,
  oscillator: {
    type: "sine3",
  },
  envelope: {
    attack: 0.01,
    decay: 0.05,
    sustain: 0.4,
    release: 1.5,
  }
});

/* polySynthA1.humanize = true
polySynthA2.humanize = true
polySynthB1.humanize = true
polySynthB2.humanize = true
polySynthC1.humanize = true
polySynthC2.humanize = true
polySynthD1.humanize = true
polySynthD2.humanize = true */

//*/