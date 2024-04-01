import BodySection from './body';
import { PageParams } from '@/types';
import React from 'react';
import { TopNavBar } from './nav-bar';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export default function Home ({params: {locale}}: PageParams) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();

    return (
        <>
            <TopNavBar t={t} />
            <BodySection t={t} />
        </>
    )
}