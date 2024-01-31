import * as Slider from '@radix-ui/react-slider'
import s from './slyder.module.scss'
export const SliderComponent = () => {
  return (
    <>
      <Slider.Root className={s.sliderRoot} defaultValue={[50]} max={100} step={1}>
        <Slider.Track className={s.sliderTrack}>
          <Slider.Range className={s.sliderRange} />
        </Slider.Track>
        <Slider.Thumb className={s.sliderThumb} aria-label="Volume1" />
        <Slider.Thumb className={s.sliderThumb} aria-label="Volume2" />
      </Slider.Root>
    </>
  )
}
