toneTransporting = false

function musicComposerB1(p) {
  sequencerObject = {

    seq1: new Tone.Sequence((time, note) => {
      polySynthD1.triggerAttackRelease(note, "16n", time);
    }, ['A2', 'C3', 'D3', 'E3', 'G3','A3', 'D3', 'E3'], "2n").start(0),

    seq2: new Tone.Sequence((time, note) => {
      polySynthD1.triggerAttackRelease(note, "16n", time);
    }, [['G4','E4'], 'A3', ['G4', ['E4']], ['D4',['E4']], 'C4','A3'], "8n").start(0),

    seq3: new Tone.Sequence((time, note) => {
      polySynthD1.triggerAttackRelease(note, "16n", time);
    }, ['A4', 'C5', 'D5', 'E5', 'G5','A5', 'D5', 'C5'], "4n").start(0),

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
