import btnSoundEffectUrl from "../assets/btnEffect.wav";
import themeSoundEffectUrl from "../assets/themeSoundEffect.wav";

export function playBtnSoundEffect() {
  const audio = new Audio(btnSoundEffectUrl);
  audio.play();
}

export function playSwitchThemeSoundEffect() {
  const audio = new Audio(themeSoundEffectUrl);
  audio.play();
}
