import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';
import { GrLanguage } from "react-icons/gr";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const LocaleSelectLanguage = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const t = useI18n();

  return (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors border border-gray-200">
          <GrLanguage className="h-4 w-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">{t("currentLanguage")}</span>
        </div>
      </HoverCardTrigger>
      
      <HoverCardContent 
        className="w-56 p-1 shadow-xl border border-gray-200 rounded-lg bg-white" 
        sideOffset={5}
        align="end"
        side="bottom"
      >
        {/* Flèche stylisée */}
        <div className="absolute -top-1.5 right-4 w-3 h-3 rotate-45 bg-white border-t border-l border-gray-200 z-10"></div>

        <div className="space-y-1">
          {/* Section Langue */}
          <div className="px-3 pt-2 pb-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
            {t("language.Language")}
          </div>
          
          <div className="space-y-0.5">
            <div 
              onClick={() => changeLocale('en')}
              className={`flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors ${
                locale === 'en' 
                  ? 'bg-gray-100 text-gray-900 font-medium' 
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <span className="fi fi-gb rounded mr-2"></span>
              <span className="text-sm">English</span>
              {locale === 'en' && (
                <span className="ml-auto text-xs text-gray-500 text-gre"> <span className='text-green-400'>•</span> Selected</span>
              )}
            </div>
            
            <div 
              onClick={() => changeLocale('fr')}
              className={`flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors ${
                locale === 'fr' 
                  ? 'bg-gray-100 text-gray-900 font-medium' 
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <span className="fi fi-fr rounded mr-2"></span>
              <span className="text-sm">Français</span>
              {locale === 'fr' && (
                <span className="ml-auto text-xs text-gray-500"><span className='text-green-400'>•</span> Sélectionné</span>
              )}
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-gray-100 mx-2 my-1"></div>

          {/* Section Devise */}
          <div className="px-3 pt-1 pb-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
            {t("language.Currency")}
          </div>
          
          <div className="px-3 py-2 text-sm text-gray-600">
            {t("language.Cerrency_price")}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default LocaleSelectLanguage;