import { useCallback, useReducer, useRef, useState } from 'react';

export const NotFound = () => {
  const [transitionState, setTransitionState] = useState<'none' | 'transition' | 'end'>('none');
  const triggerRef = useRef<HTMLSpanElement>(null);
  const remainRef = useRef<HTMLSpanElement>(null);

  const activate = useCallback(async () => {
    const trigger = triggerRef.current;
    const remain = remainRef.current;
    if (!trigger || !remain) return;

    setTransitionState('transition');

    await Promise.all([
      trigger.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 1500, fill: 'forwards' })
        .finished,
      remain.animate([{}, { transform: `translateX(-${trigger.offsetWidth / 2}px)` }], {
        duration: 3000,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fill: 'forwards',
      }).finished,
    ]);

    setTransitionState('end');
  }, [triggerRef, remainRef]);

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center">
      <div className="select-none font-poiret-one text-9xl lg:text-[10rem]">
        {transitionState != 'end' ? (
          '404'
        ) : (
          <span className="animate-pulse">
            <NumberSlot initialValue={4} />
            <NumberSlot initialValue={0} />
            <NumberSlot initialValue={4} />
          </span>
        )}
      </div>
      <div className="select-none font-urbanist text-2xl text-main lg:text-3xl">
        {transitionState != 'end' && (
          <span onClick={transitionState == 'none' ? activate : undefined} ref={triggerRef}>
            Not&nbsp;
          </span>
        )}
        {transitionState != 'end' ? (
          <span className="inline-block" ref={remainRef}>
            Found
          </span>
        ) : (
          <span>Found</span>
        )}
      </div>
    </main>
  );
};

const NumberSlot = (props: { initialValue: number }) => {
  const [value, increment] = useReducer(
    (prev: number) => (prev == 9 ? 0 : prev + 1),
    props.initialValue,
  );

  return <span onClick={increment}>{value}</span>;
};
