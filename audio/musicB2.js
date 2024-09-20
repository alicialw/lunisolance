
toneTransporting = false

function musicComposerA2(p) {
  sequencerObject = {

    seq1: new Tone.Sequence((time, note) => {
      polySynthB2.triggerAttackRelease(note, "16n", time);
    }, ['C3', 'D3', 'F3', 'G3', 'A3','C3', 'F3', 'G3'], "2n").start(0),

    seq2: new Tone.Sequence((time, note) => {
      polySynthB2.triggerAttackRelease(note, "16n", time);
    }, [['A4','G4'], 'C4', ['A4',['G4']], ['F4',['G4']], 'D4', 'A3'], "8n").start(0),

    seq3: new Tone.Sequence((time, note) => {
      polySynthB2.triggerAttackRelease(note, "16n", time);
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


  sequencerObject.startTransport()
};

new p5(musicComposerA2);
