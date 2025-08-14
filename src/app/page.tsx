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
          <b>বিশেষ দ্রষ্টব্য: </b>
        </>)}
        <ul className="ps-3">
          <li>{useText("I've used a context for storing the current language (default: Bangla)",'আমি এখানে React Context ব্যবহার করেছি এক্টিভ ল্যাংগুয়েজ স্টোর করার জন্য।')}</li>
          <li>{useText("I've not used /en or /bn routes for simplicity",'ডেমো হওয়ায় আমি /en or /bn রাউট ব্যবহার করিনি।')}</li>
          <li>{useText("Also, I've not used i18n for simplicity",'এবং, ডেমো হওয়ায় আমি i18n ব্যবহার করিনি।')}</li>
        </ul>
      </div>
    </div>
  );
}
