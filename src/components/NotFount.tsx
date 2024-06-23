import { useCallback, useReducer, useRef, useState } from 'react';

export const NotFound = () => {
  const [transitionState, setTransitionState] = useState<'none' | 'transition' | 'end'>('none');
  const triggerRef = useRef<HTMLSpanElement>(null);
  const remainRef = useRef<HTMLSpanElement>(null);
  const [num1, increment1, isCorrect1] = useNumberSlot(4, 3);
  const [num2, increment2, isCorrect2] = useNumberSlot(0, 0);
  const [num3, increment3, isCorrect3] = useNumberSlot(4, 2);
  const [isSolved, setIsSolved] = useState(false);

  const activate = useCallback(async () => {
    const trigger = triggerRef.current;
    const remain = remainRef.current;
    if (!trigger || !remain) return;

    setTransitionState('transition');

    await Promise.all([
      trigger.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 1500, fill: 'forwards' })
        .finished,
      remain.animate([{}, { transform: `translateX(-${trigger.offsetWidth / 2}px)` }], {
        duration: 2500,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fill: 'forwards',
      }).finished,
    ]);

    setTransitionState('end');
  }, [triggerRef, remainRef]);

  if (!isSolved && isCorrect1 && isCorrect2 && isCorrect3) {
    setIsSolved(true);
  }

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center">
      <div
        className="select-none px-10 font-poiret-one text-9xl lg:text-[10rem]"
        ref={(element) => {
          if (!isSolved) return;

          element?.animate([{ background: '' }, { background: 'white' }, { background: '' }], {
            duration: 1000,
            fill: 'forwards',
          });
        }}
      >
        {transitionState != 'end' ? (
          '404'
        ) : (
          <span className={`${isSolved ? '' : 'animate-pulse'}`}>
            <NumberSlot value={num1} onClink={!isSolved ? increment1 : undefined} />
            <NumberSlot value={num2} onClink={!isSolved ? increment2 : undefined} />
            <NumberSlot value={num3} onClink={!isSolved ? increment3 : undefined} />
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
      {isSolved && (
        <p
          className="absolute top-3/4 text-center font-shippori-mincho text-xl text-white"
          ref={(element) => {
            element?.animate([{ background: '' }, { background: 'white' }, { background: '' }], {
              duration: 1000,
              fill: 'forwards',
            });
          }}
        >
          <a
            href="https://twitter.com/intent/tweet?text=%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AFFound%E3%82%92%E8%A6%8B%E3%81%A4%E3%81%91%E3%81%9F%E3%80%82(%E6%83%85%E5%A0%B1%E3%81%AE%E5%85%B1%E6%9C%89%E3%82%92%E7%A6%81%E3%81%98%E3%81%BE%E3%81%99)%20%40louptung"
            target="_blank"
            className="decoration-from-font underline-offset-8 opacity-0 hover:underline"
            ref={(element) => {
              element?.animate([{ opacity: 0 }, { opacity: 0 }, { opacity: 1 }], {
                duration: 1000,
                fill: 'forwards',
              });
            }}
          >
            あなたは<span className="text-2xl">Found</span>を見つけた。
          </a>
        </p>
      )}
    </main>
  );
};

const NumberSlot = (props: { value: number; onClink?: () => void }) => {
  return <span onClick={props.onClink}>{props.value}</span>;
};

const useNumberSlot = (
  initialValue: number,
  correctValue: number,
): [value: number, increment: React.DispatchWithoutAction, isCorrect: boolean] => {
  const [value, increment] = useReducer((prev: number) => (prev == 9 ? 0 : prev + 1), initialValue);
  return [value, increment, value == correctValue];
};
