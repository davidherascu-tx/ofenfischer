'use client';

import { forwardRef } from 'react';
import { HONEYPOT_FIELD_NAME } from '@/lib/antiSpam';

// Für Menschen unsichtbares Feld gegen Formular-Spam-Bots.
// display:none wird von manchen Bots erkannt und übersprungen, daher Off-Screen-Positionierung.
const HoneypotField = forwardRef<HTMLInputElement>((_props, ref) => (
  <div
    aria-hidden="true"
    style={{ position: 'absolute', left: '-5000px', width: '1px', height: '1px', overflow: 'hidden' }}
  >
    <label htmlFor={HONEYPOT_FIELD_NAME}>Bitte dieses Feld leer lassen</label>
    <input
      ref={ref}
      type="text"
      id={HONEYPOT_FIELD_NAME}
      name={HONEYPOT_FIELD_NAME}
      tabIndex={-1}
      autoComplete="off"
    />
  </div>
));

HoneypotField.displayName = 'HoneypotField';
export default HoneypotField;
