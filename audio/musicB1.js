function musicComposerB1(p) {
  sequencerObject = {

    seq1: new Tone.Sequence((time, note) => {
      polySynthB1.triggerAttackRelease(note, "16n", time);
    }, ['C3', 'D3', 'E3', 'G3', 'A3','G3', 'E3', 'D3'], "2n").start(0),

    seq2: new Tone.Sequence((time, note) => {
      polySynthB1.triggerAttackRelease(note, "16n", time);
    }, [['G4','E4'], 'A4', ['G4', 'A4'], ['G4','E4'], 'D4','E3'], "8n").start(0),

    seq3: new Tone.Sequence((time, note) => {
      polySynthB1.triggerAttackRelease(note, "16n", time);
    }, ['C5', 'D5', 'E5', 'G5', 'A5','C6', 'E5', 'D5'], "4n").start(0),

    setup() {
    },

    startTransport() {
      this.toneTransporting = true;
      Tone.start();
      Tone.Transport.start();
    },

    stopTransport() {
      this.toneTransporting = false;
      Tone.Transport.stop();
    }
  };

  p.setup = () => {
    sequencerObject.setup();
  };

  sequencerObject.startTransport()
};

new p5(musicComposerB1);
