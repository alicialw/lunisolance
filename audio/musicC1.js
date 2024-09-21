function musicComposerB1(p) {
  sequencerObject = {

    seq1: new Tone.Sequence((time, note) => {
      polySynthC1.triggerAttackRelease(note, "16n", time);
    }, ['C3', 'D3', 'F3', 'G3', 'A3','G3', 'F3', 'D3'], "2n").start(0),

    seq2: new Tone.Sequence((time, note) => {
      polySynthC1.triggerAttackRelease(note, "16n", time);
    }, [['A4','G4'], 'C4', ['A4',['G4']], ['F4',['G4']], 'D4', 'A3']).start(0),

    seq3: new Tone.Sequence((time, note) => {
      polySynthC1.triggerAttackRelease(note, "16n", time);
    }, ['C5', 'D5', 'F5', 'G5', 'A5','C6', 'F5', 'D5'], "4n").start(0),

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

  /*p.keyPressed = (e) => {
    sequencerObject.keyPressed(e);
  };*/

  sequencerObject.startTransport()
};

new p5(musicComposerB1);
