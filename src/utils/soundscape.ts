// Web Audio ambient soundscape synthesizer
class AmbientAudioController {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private intervalId: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start() {
    try {
      this.initContext();
      if (!this.ctx) return;

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 3);
      this.masterGain.connect(this.ctx.destination);

      // Play soft harmonic drone chords (Warm Pentatonic Sanctuary: E, B, G#, C#)
      const notes = [164.81, 246.94, 329.63, 415.30, 493.88];
      
      const playPentaChime = () => {
        if (!this.ctx || !this.masterGain || !this.isPlaying) return;
        const freq = notes[Math.floor(Math.random() * notes.length)];
        const osc = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        const now = this.ctx.currentTime;
        noteGain.gain.setValueAtTime(0.001, now);
        noteGain.gain.linearRampToValueAtTime(0.05, now + 1.2);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

        osc.connect(noteGain);
        noteGain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + 4.8);
      };

      // Gentle initial chime
      playPentaChime();
      this.intervalId = window.setInterval(() => {
        if (this.isPlaying) playPentaChime();
      }, 3500);

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1);
      setTimeout(() => {
        this.isPlaying = false;
      }, 1000);
    } else {
      this.isPlaying = false;
    }
  }
}

export const soundscape = new AmbientAudioController();
