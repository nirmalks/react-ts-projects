import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type ColorType = {
  key: number;
  index: number;
  hexString: string;
  alpha: number;
  rgb: [number, number, number];
  type: string;
  weight: number;
  hex: string;
};
export default function Color({ rgb, weight, index, hexString }: ColorType) {
  const bcg = rgb.join(',');
  const hexValue = `#${hexString}`;
  const notify = () => toast('Copied to Clipboard!');
  return (
    <>
      <article
        className={`color ${
          index > 10 ? 'text-white' : ''
        }  p-6  cursor-pointer h-32`}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          navigator.clipboard.writeText(hexValue);
          notify();
        }}
      >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexValue}</p>
      </article>
    </>
  );
}
