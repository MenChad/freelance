"use client";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

export const LocaleSelect = () => {
    const locale = useCurrentLocale();
    const changeLocale = useChangeLocale();

    return (
        <select
        className="bg-white border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={locale}
        onChange={(e) => changeLocale(e.target.value as "en" |"fr")}
        >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
        </select>
    )

}
 

  

