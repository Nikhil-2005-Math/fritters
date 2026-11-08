// Web Audio API Synthesizer for Pazhampori Global Inc.
// 100% self-contained audio generation (No external mp3 assets needed)

class PazhamSoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Sizzling coconut oil frying sound
  sizzle(duration = 1.2) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const bufferSize = this.ctx.sampleRate * duration;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);

      // Pinkish noise with crackles
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99 * b0 + white * 0.05;
        b1 = 0.95 * b1 + white * 0.1;
        b2 = 0.85 * b2 + white * 0.2;
        let crackle = Math.random() < 0.003 ? (Math.random() * 2 - 1) * 3 : 0;
        output[i] = (b0 + b1 + b2) * 0.15 + crackle * 0.2;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2400, this.ctx.currentTime);
      filter.Q.setValueAtTime(1.8, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.4, this.ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start();
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // Crisp golden bite / crunch sound
  crunch() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, t);
      osc.frequency.exponentialRampToValueAtTime(60, t + 0.15);

      gain.gain.setValueAtTime(0.35, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.16);

      // Add a tiny noise burst for crispness
      this.sizzle(0.18);
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // Shawarma paper wrap swoosh
  wrapPaper() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const duration = 0.35;
      const bufferSize = this.ctx.sampleRate * duration;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.25;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(3000, this.ctx.currentTime + duration * 0.5);
      filter.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + duration);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.3, this.ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // Corporate luxury delivery chime
  chime() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Pazham Major)
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = this.ctx.currentTime + idx * 0.08;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.001, t);
        gain.gain.exponentialRampToValueAtTime(0.25, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + 0.85);
      });
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // Tea stall order bell ("Ting!")
  bell() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1760, t); // A6
      osc.frequency.exponentialRampToValueAtTime(1750, t + 0.8);

      gain.gain.setValueAtTime(0.4, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.95);
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // Dramatic cancellation alert siren (Ragebait warning)
  alarm() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      for (let i = 0; i < 3; i++) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = t + i * 0.22;

        osc.type = 'square';
        osc.frequency.setValueAtTime(880, startTime);
        osc.frequency.setValueAtTime(440, startTime + 0.11);

        gain.gain.setValueAtTime(0.18, startTime);
        gain.gain.setValueAtTime(0.001, startTime + 0.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.21);
      }
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // Mournful sad organ / violin chord for cancelled Pazhampori return
  sadMelody() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      // Minor mournful progression: D minor (D4, F4, A4) -> C# dim -> D minor low
      const phrases = [
        { freq: 293.66, time: 0.0, dur: 0.6 },  // D4
        { freq: 349.23, time: 0.4, dur: 0.6 },  // F4
        { freq: 440.00, time: 0.9, dur: 0.8 },  // A4
        { freq: 415.30, time: 1.6, dur: 0.9 },  // G#4 / Ab
        { freq: 277.18, time: 2.4, dur: 1.4 }   // C#4 / Low sorrow
      ];

      phrases.forEach(p => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = this.ctx.currentTime + p.time;

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(p.freq, t);

        // Gentle lowpass filter to make it sound like a weeping violin/reed
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(950, t);

        gain.gain.setValueAtTime(0.001, t);
        gain.gain.linearRampToValueAtTime(0.15, t + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, t + p.dur);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + p.dur + 0.05);
      });
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }
}

// Global instance
window.soundFX = new PazhamSoundFX();
