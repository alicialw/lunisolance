toneTransporting = false

function musicComposerA2(p) {
  sequencerObject = {

    seq1: new Tone.Sequence((time, note) => {
      polySynthC2.triggerAttackRelease(note, "16n", time);
    }, ['A2', 'C3', 'D3', 'F3', 'G3','A2', 'D3', 'F3'], "2n").start(0),

    seq2: new Tone.Sequence((time, note) => {
      polySynthC2.triggerAttackRelease(note, "16n", time);
    }, [['F4','D4'], 'A4', ['F4', 'G4'], ['F4','D4'], 'C4','A3'], "8n").start(0),

    seq3: new Tone.Sequence((time, note) => {
      polySynthC2.triggerAttackRelease(note, "16n", time);
    }, ['A4', 'C5', 'D5', 'F5', 'G5','A5', 'D5', 'C5'], "4n").start(0),

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

new p5(musicComposerA2);
