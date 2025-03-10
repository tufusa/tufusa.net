export const ImaTeapot = () => (
  <main className="flex w-full flex-1 flex-col items-center justify-center">
    <p className="px-10 font-poiret-one text-9xl lg:text-[10rem]">418</p>
    <p className="font-urbanist text-2xl text-[#7ea907] lg:text-3xl">I'm a teapot</p>

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
        href="https://twitter.com/intent/tweet?text=%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AFTeapot%E3%82%92%E8%A6%8B%E3%81%A4%E3%81%91%E3%81%9F%E3%80%82(%E6%83%85%E5%A0%B1%E3%81%AE%E5%85%B1%E6%9C%89%E3%82%92%E7%A6%81%E3%81%98%E3%81%BE%E3%81%99)%20%40louptung"
        target="_blank"
        className="decoration-from-font underline-offset-8 opacity-0 hover:underline"
        ref={(element) => {
          element?.animate([{ opacity: 0 }, { opacity: 0 }, { opacity: 1 }], {
            duration: 1000,
            fill: 'forwards',
          });
        }}
      >
        あなたは<span className="text-2xl">Teapot</span>を見つけた。
      </a>
    </p>
  </main>
);
