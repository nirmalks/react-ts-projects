import rgbToHex from './utils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Color({
  rgb,
  weight,
  index,
  hexString,
}: {
  rgb: string[];
  weight: number;
  index: number;
  hexString: string;
}) {
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
