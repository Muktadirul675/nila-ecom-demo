'use client';

import { useText } from "./utils/language";

export default function Home() {
  return (
    <div className="p-5 text-2xl w-full md:w-4/5 mx-auto">
      <div>
        {useText('This is a demo navbar showcase integrating multi langugaes (Bangla, English) support.', '')}
      </div>
      <div>
        {useText(<>
          <b>
            Please note that:
          </b>
        </>,<>
          <b></b>
        </>)}
        <ul className="ps-3">
          <li>{useText("I've used a context for storing the current language (default: Bangla)",'')}</li>
          <li>{useText("I've not used /en or /bn routes for simplicity",'')}</li>
          <li>{useText("Also, I've not used i18n for simplicity",'')}</li>
        </ul>
      </div>
    </div>
  );
}
