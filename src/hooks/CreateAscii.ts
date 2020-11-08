const asciiXDots = 2;
const asciiYDots = 4;

const threshold = 50;
const asciiWidth = 30;
let asciiHeight;

interface ImageBraileProps {
  width: number;
  height: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export default function CreateAscii(image: HTMLImageElement): string {
  const ascii: string[] = [];

  asciiHeight = Math.ceil(
    (asciiWidth * asciiXDots * (image.height / image.width)) / asciiYDots,
  );

  const canvas = document.createElement('canvas');
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const context = canvas.getContext('2d')!;

  canvas.width = asciiWidth * asciiXDots;
  canvas.height = asciiHeight * asciiYDots;

  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  for (let y = 0; y < canvas.height; y += asciiYDots) {
    let line = '';
    for (let x = 0; x < canvas.width; x += asciiXDots) {
      const char = ImageDataBraille(
        context.getImageData(x, y, asciiXDots, asciiYDots),
      );
      line += `<span>${char}</span>`;
    }
    ascii.push(line);
  }

  return ascii.join('<br />');
}

function ImageDataBraille(data: ImageBraileProps): string {
  if (data.width !== asciiXDots || data.height !== asciiYDots)
    throw TypeError(
      `Braille image data must be ${asciiXDots}px wide and ${asciiYDots}px high.`,
    );

  let dots = [];
  for (let i = 0; i < asciiXDots * asciiYDots; i += 1) {
    dots[i] = data.data.subarray(i * 4, (i + 1) * 4);
  }

  // Reorder dots to match Braille dot order
  dots = [
    dots[0],
    dots[2],
    dots[4],
    dots[1],
    dots[3],
    dots[5],
    dots[6],
    dots[7],
  ];

  dots = dots
    .map(([r, g, b]) => (r + g + b) / 3)
    .map(grey => +(grey < threshold));

  // Braille Unicode range starts at U2800 (= 10240 decimal)
  // Each of the eight dots is mapped to a bit in a byte which
  // determines its position in the range.
  // https://en.wikipedia.org/wiki/Braille_Patterns

  return String.fromCharCode(10240 + parseInt(dots.reverse().join(''), 2));
}
