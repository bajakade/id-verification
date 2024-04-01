import { useFormatter } from "next-intl";

export const TopNavBar = ({t}: {t: (key: string) => string}) => {
  const format = useFormatter();
  const timeStamp = format.dateTime(new Date(), {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour:  'numeric',
    minute: 'numeric'
  }).replace(/(\d{4})(,)/, '$1 |') // add a pipe (|) after the year e.g Mar 12, 2023 | 4:32 pm

    return (
      <nav className="px-4 py-4 flex items-center justify-between">
        {/* Left margin */}
        <div className="flex ml-32 items-center space-x-16">
            <img src="/logo.png" alt="Logo" className="h-24" />
            <div>
            <h1 className="text-lg font-semibold">{t('NavBar.title')}</h1>
            <p className="text-sm">{timeStamp} </p>
          </div>
        </div>
        {/* Logout Link */}
        <a href="#" className="text-orange text-lg hover:underline mr-32">{t('NavBar.logout')}</a>
      </nav>
    );
  };